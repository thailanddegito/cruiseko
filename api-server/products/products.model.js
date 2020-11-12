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
      description : type.TEXT,
      product_banner : type.STRING,
      picture : type.STRING,
      remark : type.TEXT,
      highlight : type.TEXT,
      itinerary : type.TEXT,
      pricing_type : {
        type : type.STRING(20),
        defaultValue : 'tour'
      },
      // price : type.DECIMAL(18,2),
      
    },
    {
        timestamps: true,
        freezeTableName: true
    })
  
    Product.associate = function(models) {
        Product.belongsTo(models.ProductCategory,{foreignKey : 'cate_id',constraints: false});
        Product.hasMany(models.PriceCalendar,{foreignKey : 'product_id',constraints: false})
    };
    return Product
  }
  