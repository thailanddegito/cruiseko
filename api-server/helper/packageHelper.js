

exports.calPackagePriceCard =(pkg,user)=>{
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
  
    if(price_date_detail){
      const {commission,price} = price_date_detail;
      const real_price = parseFloat(commission) || parseFloat(price)
      result.price = real_price
    }
      
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

exports.calPackagePrice =(pkg,user,date,adult,children)=>{
  var result = {price : -1 ,unit : 'person'}
  if(!pkg ) return result;
  if(!pkg.price_dates.length) return result;

  var total_person = adult+children;
  if(!total_person) total_person = 1;

  var price_date = pkg.price_dates.find(val => new Date(date) >= new Date(val.start_date) && new Date(date) <= new Date(val.end_date) )

  if(!price_date) return result;

  var {pricing_type} = price_date;
  // console.log('pkg.price_dates',pkg.price_dates)

  // var user_type = !user ? 'fit' : user.type 

  var company_type_id = 0
  if(user && user.company_type_id) company_type_id = user.company_type_id;

  var com_type = price_date.price_company_types.find(val => val.company_type_id == company_type_id)
    // console.log('com_type',com_type)
  if(!com_type) return result;

  if(pricing_type === 'normal'){
    var adult_detail = com_type.price_date_details.find(val => val.customer_type === 'adult')
    var children_detail = com_type.price_date_details.find(val => val.customer_type === 'children')

    
    if(adult_detail){
      const {commission,price} = adult_detail;
      const real_price = parseFloat(commission) || parseFloat(price)
      result.price = real_price  * adult 
    }
      
    if(children_detail){
      const {commission,price} = children_detail;
      const real_price = parseFloat(commission) || parseFloat(price)
      // console.log(real_price * children)
      if(!result.price) result.price = 0
      result.price += real_price * children 
    }
  }
  else{
    //1 <= 2 && 2 <= 
    var price_date_detail = com_type.price_date_details.find(val => val.range_start <= total_person && total_person <= val.range_end)

    if(!price_date_detail) return result;

    const {commission,price} = price_date_detail;
    var net_price = parseFloat(commission)
    // console.log('price_date_detail',total_person,price_date_detail)

    var normal_price = parseFloat(price) 


    result.normal_price = normal_price
    result.price =  net_price ? net_price : normal_price
    result.per_person = net_price ? net_price/total_person : normal_price/total_person
    
  }

  return result;
  

}