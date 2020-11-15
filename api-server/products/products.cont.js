const { Product,ProductImage,sequelize,PriceDate,PriceCompanyType,PriceDateDetail,PriceTier} = require('../db')
const tools = require('../helper/tools')
const errors = require('../errors')
const {DefaultError} = errors

exports.getAll = async(req,res,next)=>{
  var {page,limit} = req.query
  try{

    var where = {}
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
      {model : PriceCompanyType , include : [PriceDateDetail]}
    ]
    const include = [
      {model : PriceDate ,include :price_include}
    ]
    var where = {id,deleted : 0}
    const product = await Product.findOne({where,include})
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
    if(files.images){
      var images = files.images
      if(!Array.isArray(files.images))  images = [images]
      images = images.filter(val => val.name)
      for(const file of images){
        let fileName = await tools.moveFileWithPath(file,'images')
        if(fileName) images_urls.push(tools.genFileUrl(fileName,'images'))
      }
    }
    if(files.picture && files.picture.name){
      //console.log(req.files);
      let file = files.picture;
      let fileName = await tools.moveFileWithPath(file,'images')
      data.picture = tools.genFileUrl(fileName,'images')
    }
    transaction = await sequelize.transaction()



    const product_draft = await createProduct({isDraft : true,data,images_urls,price_date_list,transaction})
    if(method !== 'draft'){
      const product_live = await createProduct({isDraft : false,data,images_urls,price_date_list,transaction,draft_ref :product_draft.id })
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
  try{

  }
  catch(err){
    next(err)
  }
}

exports.delete = async(req,res,next)=>{
  const id = req.params.id
  try{
    await Product.update({deleted : 1},{where : {id}})
    res.json({success:true})
  }
  catch(err){
    next(err);
  }
}


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


    if(images_urls.length){
      var images_data = images_urls.map(val => ({product_id,image : val}) )
      await ProductImage.bulkCreate(images_data,{transaction})
    }

    if(price_date_list){
      price_date_list = JSON.parse(price_date_list)
      var price_date_arr = price_date_list.map(val =>  ({...val,product_id}) )

      for(const date of  price_date_arr){
        const {pricing_type,user_type} = date
        const price_date = await PriceDate.create(date,{transaction} )
        const {id : price_date_id} = price_date;
        for(const ut of user_type){
          const ut_item = await PriceCompanyType.create({...ut,price_date_id},{transaction})
          const {id : price_company_type_id} = ut_item;
          if(pricing_type === 'tier' ){
            const {tiers} = ut;
            const price_details_data = tiers.map((val,i) => {
              const {number} = val;
              var range_start = i === 0 ? 0 : tiers[i-1].number;
              var range_end = number;
              return {...val,range_start,range_end,price_date_id,price_company_type_id}
            })
            await PriceDateDetail.bulkCreate(price_details_data,{transaction})
          }
        }
        
      }
    }

    return product
}