const price_list = [
  {customer_type :'adult',name : "Adult's Price", price :null,deposit_rate:0,commission_rate: 0,deposit:0,commission:0},
  {customer_type :'children',name : "Children's Price", price :null,deposit_rate:0,commission_rate: 0,deposit:0,commission:0}
]

const initStateTypeNormal = {
    start_date:null,end_date : null,
    pricing_type : 'normal',
    user_type : [ {name : 'FIT',company_type_id : 0  ,price_list }  ]
}

const initFirstTier = {number : 2,price :null,deposit_rate:0,commission_rate: 0,deposit:0,commission:0}

const initStateTypeTier = {
    start_date:null,end_date : null,
    pricing_type : 'tier',
    user_type : [ {name : 'FIT',company_type_id : 0 , tier_start : 1 , tiers : [initFirstTier] }  ]
  
}

export const toPriceListState = (price_dates) => {
  return price_dates.map(val => {
    var {pricing_type} = val;
    

    var user_type = val.price_company_types.map(price_com => {
      const {company_type_id} = price_com
      
      var detail = [];
      if(pricing_type === 'tier'){
        detail = price_com.price_date_details.map(item => ({...item,number:item.range_end}) )
        if(!price_com.price_date_details.length) detail = [initFirstTier]
      }
      else{
        detail = price_com.price_date_details.map(item => ({...item,name : item.customer_type}) )
        if(!price_com.price_date_details.length) detail = price_list
      }
      var prep = {
        ...price_com,
        name : company_type_id === 0 ? 'FIT' : price_com.company_type.name,
        tier_start : pricing_type === 'tier' ? detail[0] ? detail[0].range_start : 1 : undefined 
      }
      prep[pricing_type === 'tier' ? 'tiers' : 'price_list'] = detail;

      return prep
    })

    var root = {
      start_date : val.start_date,
      end_date : val.end_date,
      pricing_type : val.pricing_type,
      user_type,
      cost : val.cost,
    }

    return root;

  })
}


export const sortImages = (images,order) =>{
  if(!order) return;
  images.sort((a,b) =>{
    var a = order.findIndex(val => val.id === a.id )
    var b = order.findIndex(val => val.id === b.id )
    return a-b
  })
}

export const calPackagePriceCard =(pkg,user)=>{
  var result = {price : -1 ,unit : 'person'}
  if(!pkg ) return result;
  if(!pkg.price_dates.length) return result;

  var price_date = pkg.price_dates[0]
  var {pricing_type} = price_date;
  // console.log('pkg.price_dates',pkg.price_dates)

  var user_type = !user ? 'fit' : user.type 

  var company_type_id = 0
  if(user && user.company_type_id) company_type_id = user.company_type_id;

  var com_type = price_date.price_company_types.find(val => val.company_type_id == company_type_id)
    // console.log('com_type',com_type)
  if(!com_type) return result;

  if(pricing_type === 'normal'){
    var price_date_detail = com_type.price_date_details.find(val => val.customer_type === 'adult')
  
    if(price_date_detail)
      result.price = price_date_detail.price
    // return price_date_detail ? price_date_detail.price : result;
  }
  else{
    var price_date_detail = com_type.price_date_details.reduce((maxItem ,current) =>{
      if(!maxItem) return current;
      if(current.range_end >= maxItem.range_end) return current;
      else return maxItem
    })

    if(!price_date_detail) return result;

    const {commission,range_end,price} = price_date_detail;
    var net_price = parseFloat(commission)
    // console.log('price_date_detail',price_date_detail)

    var normal_price = parseInt(parseFloat(price) / range_end) 


    result.price =  user_type === 'fit' && net_price ? net_price/range_end : normal_price
    
  }

  return result;
  

}

export const calPackagePrice =(pkg,user,adult,children)=>{
  var result = {price : -1 ,unit : 'person'}
  if(!pkg ) return result;
  if(!pkg.price_dates.length) return result;

  var price_date = pkg.price_dates[0]
  var {pricing_type} = price_date;
  // console.log('pkg.price_dates',pkg.price_dates)

  var user_type = !user ? 'fit' : user.type 

  var company_type_id = 0
  if(user && user.company_type_id) company_type_id = user.company_type_id;

  var com_type = price_date.price_company_types.find(val => val.company_type_id == company_type_id)
    // console.log('com_type',com_type)
  if(!com_type) return result;

  if(pricing_type === 'normal'){
    var price_date_detail = com_type.price_date_details.find(val => val.customer_type === 'adult')
  
    if(price_date_detail)
      result.price = price_date_detail.price
    // return price_date_detail ? price_date_detail.price : result;
  }
  else{
    var price_date_detail = com_type.price_date_details.reduce((maxItem ,current) =>{
      if(!maxItem) return current;
      if(current.range_end >= maxItem.range_end) return current;
      else return maxItem
    })

    if(!price_date_detail) return result;

    const {commission,range_end,price} = price_date_detail;
    var net_price = parseFloat(commission)
    // console.log('price_date_detail',price_date_detail)

    var normal_price = parseInt(parseFloat(price) / range_end) 


    result.price =  user_type === 'fit' && net_price ? net_price/range_end : normal_price
    
  }

  return result;
  

}