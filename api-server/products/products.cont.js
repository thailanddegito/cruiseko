const { Product,ProductImage,sequelize,PriceDate,
  CompanyType,
  PriceCompanyType,PriceDateDetail,PriceTier} = require('../db')
const tools = require('../helper/tools')
const errors = require('../errors')
const {DefaultError} = errors
const {Op} = require('sequelize')

exports.getAll = async(req,res,next)=>{
  var {page,limit,is_draft=1} = req.query
  try{

    var where = {deleted : 0}

    if(is_draft) where.is_draft = is_draft; 
    var options = {where}
    if(!isNaN(page) && page > 1){
      options.offset = (page-1)*limit;
      
      options.limit = limit;
    }
    if(!isNaN(limit)){
        options.limit = parseInt(limit);
    }
    const products = await Product.findAndCountAll(options)
    res.json(products)
  }
  catch(err){
    next(err);
  }
}

exports.getOne = async(req,res,next)=>{
  const id = req.params.id
  try{
    const price_include = [
      {model : PriceCompanyType , include : [PriceDateDetail,CompanyType]}
    ]
    const include = [
      {model : PriceDate ,include :price_include},
      {model : ProductImage , attributes:['id','image','type','order']}
    ]
    var where = {id,deleted : 0}
    var order =  [
      [ProductImage, 'order', 'asc']
    ]
    const product = await Product.findOne({where,include,order})
    res.json(product)
  }
  catch(err){
    next(err);
  }
}

exports.create = async(req,res,next)=>{
  var data = req.body;
  var {method = 'draft',price_date_list} = data;
  var files = req.files || {}
  console.log('data',data)
  console.log('files',files)
  var transaction;
  var images_urls = []
  try{
    images_urls = await handleProductImages(files)
    if(files.picture && files.picture.name){
      //console.log(req.files);
      let file = files.picture;
      let fileName = await tools.moveFileWithPath(file,'images')
      data.picture = tools.genFileUrl(fileName,'images')
    }
    transaction = await sequelize.transaction()

    data.equal_draft = method === 'publish' ? 1 : 0;

    const product_draft = await createProduct({isDraft : true,data,images_urls,price_date_list,transaction})
    if(method === 'publish'){
      
      await createProduct({isDraft : false,data,images_urls,price_date_list,transaction,draft_ref :product_draft.id })
    }


    await transaction.commit()
    res.json({success:true,product_id : product_draft.id})
  }
  catch(err){
    next(err);
    if(transaction) await transaction.rollback()
  }
}

exports.update = async(req,res,next)=>{
  const id = req.params.id
  const product_id = id;
  var data = req.body;
  var {method = 'draft',price_date_list,images_order} = data;
  var files = req.files || {}
  var images_urls = []
  var transaction;
  console.log(data)
  console.log('files',files)
  try{
    images_urls = await handleProductImages(files)

    if(files.picture && files.picture.name){
      //console.log(req.files);
      let file = files.picture;
      let fileName = await tools.moveFileWithPath(file,'images')
      data.picture = tools.genFileUrl(fileName,'images')
    }

    var pkg_live = method === 'publish' ? await Product.findOne({where : {draft_ref : id}}) : null

    transaction = await sequelize.transaction()
    if(price_date_list){
      await clearPriceData(id,transaction)
      await createPriceData(price_date_list,id,transaction)
    }
    let task = [];
    if(images_order){
      images_order = JSON.parse(images_order);
      for(const im of images_order){
        task.push(ProductImage.update({order : im.order},{where : {id : im.id},transaction}))
      }
    }

    // console.log(images_urls)
    if(images_urls.length){
      var images_data = images_urls.map(val => ({...val,product_id}) )
      await ProductImage.bulkCreate(images_data,{transaction})
      // task.push(ProductImage.bulkCreate(images_data,{transaction}))
    }

    data.equal_draft = 0;

    if(method === 'publish'){
      data.equal_draft = 1;
      if(!pkg_live){
        pkg_live = await createProduct({isDraft:false,data,price_date_list,transaction,draft_ref:id})
      }
      else {
        task.push(Product.update(data,{where : {draft_ref : id},transaction}))
      }
      const live_id = pkg_live.id
      var draft_images = await ProductImage.findAll({where : {product_id : id},attributes:['image','order','type'],transaction,raw:true})
      draft_images = draft_images.map(val => ({...val,product_id : live_id}) )
      // console.log(draft_images)

      task.push(clearImages(live_id,transaction))
      task.push(ProductImage.bulkCreate(draft_images,{transaction}))
    }



    await Promise.all(task)

    await Product.update(data,{where : {id},transaction})
    await transaction.commit()
    res.json({success:true})
  }
  catch(err){
    next(err)
    if(transaction) await transaction.rollback()
  }
}

exports.updatePublishStatus = async(req,res,next)=>{
  var {id,publish_status} = req.body;
  try{
    if(!publish_status && publish_status !== 0){
      throw new DefaultError(errors.FILEDS_INCOMPLETE);
    }

    if(publish_status == 1){
      const pkg_live = await Product.findOne({where : {draft_ref : id}});

      if(!pkg_live){
        throw new DefaultError(errors.NOT_PUBLISHED);
      }
    }
    

    await Product.update({publish_status },{where : {[Op.or] : [{id },{draft_ref : id} ] }})
    res.json({success:true})
  }
  catch(err){
    next(err);
  }
}

exports.delete = async(req,res,next)=>{
  const id = req.params.id
  try{
    await Product.update({deleted : 1},{where : {id}})
    await Product.update({deleted : 1},{where : {draft_ref : id}})
    res.json({success:true})
  }
  catch(err){
    next(err);
  }
}

async function handleProductImages (files){
  var images_urls = []
  if(files.images){
    var images = files.images
    if(!Array.isArray(files.images))  images = [images]
    images = images.filter(val => val.name)
    for(const file of images){
      let fileName = await tools.moveFileWithPath(file,'images')
      if(fileName) images_urls.push({image : tools.genFileUrl(fileName,'images'),type:'gallery'})
    }
  }
  if(files.banners){
    var images = files.banners
    if(!Array.isArray(files.banners))  images = [images]
    images = images.filter(val => val.name)
    for(const file of images){
      let fileName = await tools.moveFileWithPath(file,'images')
      if(fileName) images_urls.push({image : tools.genFileUrl(fileName,'images'),type:'banner'})
    }
  }
  return images_urls;
}

exports.createProduct = createProduct;
async function createProduct({isDraft,data,images_urls,price_date_list,transaction,draft_ref}){
    var _data ={...data}

    if(!isDraft){
      _data.is_draft = 0
      _data.draft_ref = draft_ref;
    }
    else{
      _data.is_draft = 1
    }

    const product = await Product.create(_data,{transaction})
    const product_id = product.id


    if(images_urls && images_urls.length){
      var images_data = images_urls.map(val => ({...val,product_id,id : null}) )
      await ProductImage.bulkCreate(images_data,{transaction})
    }

    await createPriceData(price_date_list,product_id,transaction)

    return product
}


async function createPriceData (price_date_list,product_id,transaction) {
  if(price_date_list){
    price_date_list = JSON.parse(price_date_list)
    var price_date_arr = price_date_list.map(val =>  ({...val,product_id}) )

    for(const date of  price_date_arr){
      const {pricing_type,user_type} = date
      const price_date = await PriceDate.create(date,{transaction} )
      const {id : price_date_id} = price_date;
      for(const ut of user_type){
        const ut_item = await PriceCompanyType.create({...ut,price_date_id,id:null},{transaction})
        const {id : price_company_type_id} = ut_item;
        var details = []
        const {tiers,company_type_id,tier_start} = ut;
        if(pricing_type === 'tier' ){
          
          details = tiers.map((val,i) => {
            const {number} = val;
            var range_start = i === 0 ? tier_start : tiers[i-1].number;
            var range_end = number;
            return {...val,range_start,range_end,price_date_id,price_company_type_id,company_type_id,id : null}
          })
        }
        else{
          const {price_list} = ut;
          details = price_list.map((val,i) => {
            return {...val,price_date_id,price_company_type_id,company_type_id,id : null}
          })
        }
        await PriceDateDetail.bulkCreate(details,{transaction})
      }
      
    }
  }
}

async function clearPriceData(product_id,transaction){
  const price_dates = await PriceDate.findAll({where : {product_id},transaction,raw:true})
  const date_ids = price_dates.map(val => val.id)
  return Promise.all([
    PriceDate.destroy({where : {product_id},transaction}),
    PriceCompanyType.destroy({where : {price_date_id :date_ids },transaction}),
    PriceDateDetail.destroy({where : {price_date_id :date_ids },transaction})
  ])
}

async function clearImages(product_id,transaction){
  return ProductImage.destroy({where : {product_id},transaction})
}