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
      }
      prep[pricing_type === 'tier' ? 'tiers' : 'price_list'] = detail;

      return prep
    })

    var root = {
      start_date : val.start_date,
      end_date : val.end_date,
      pricing_type : val.pricing_type,
      user_type
    }

    return root;

  })
}