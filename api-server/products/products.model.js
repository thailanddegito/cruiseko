module.exports = (sequelize, type) => {
    var Product  = sequelize.define('products', {
      id : {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name : type.STRING,
      cate_id : type.INTEGER,
      by_boat_id : type.INTEGER,
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
      meta_title : type.TEXT,
      meta_description : type.TEXT,
      meta_keyword : type.TEXT,
      meta_image : type.STRING,

      pickup_location : type.STRING,
      dropoff_location : type.STRING,
      pickup_location_id : type.INTEGER,
      // dropoff_location_id : type.INTEGER,
      start_time : type.STRING,
      end_time : type.STRING,

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
        Product.belongsTo(models.Boat,{foreignKey : 'by_boat_id',constraints: false});
        Product.belongsTo(models.Location,{foreignKey : 'pickup_location_id',as : 'pickup',constraints: false});
        Product.belongsTo(models.Location,{foreignKey : 'dropoff_location_id',as : 'dropoff',constraints: false});
        Product.hasMany(models.PriceDate,{foreignKey : 'product_id',constraints: false})
        Product.hasMany(models.ProductImage,{foreignKey : 'product_id',constraints: false})
        Product.hasMany(models.Event,{foreignKey : 'product_id',constraints: false})
        Product.hasMany(models.ProductBoat,{foreignKey : 'product_id',constraints: false})
    };
    return Product
  }
  