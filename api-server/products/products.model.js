module.exports = (sequelize, type) => {
    var Product  = sequelize.define('products', {
      id : {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name : type.STRING,
      cate_id : type.INTEGER,
      brand : type.STRING,
      program_code : type.STRING,
      short_description : type.STRING,
      description : type.TEXT,
      event_description : type.TEXT,
      product_banner : type.STRING,
      picture : type.STRING,
      remark : type.TEXT,
      highlight : type.TEXT,
      itinerary : type.TEXT,
      is_draft : {
        type : type.INTEGER,
        defaultValue : 1
      },
      equal_draft : {
        type : type.INTEGER,
        defaultValue : 0
      },
      duplicate_ref : type.INTEGER,
      draft_ref : type.INTEGER,

      publish_status : {
        type : type.INTEGER,
        defaultValue : 0
      },
      deleted : {
        type : type.INTEGER,
        defaultValue : 0
      },
      is_boat : {
        type : type.INTEGER,
        defaultValue : 0
      },
      // price : type.DECIMAL(18,2),
      
    },
    {
        timestamps: true,
        freezeTableName: true
    })
  
    Product.associate = function(models) {
        Product.belongsTo(models.ProductCategory,{foreignKey : 'cate_id',constraints: false});
        Product.hasMany(models.PriceDate,{foreignKey : 'product_id',constraints: false})
        Product.hasMany(models.ProductImage,{foreignKey : 'product_id',constraints: false})
    };
    return Product
  }
  