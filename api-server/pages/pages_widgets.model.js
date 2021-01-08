module.exports = (sequelize, type) => {
    var Page  = sequelize.define('pages_widgets', {
      id : {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      page_id : type.INTEGER,
      description : type.TEXT,
      keyword : type.TEXT,
      path : type.STRING,
      image : type.STRING,
      path : type.STRING,
      image : type.STRING,
      path : type.STRING,
      image : type.STRING,
      status : type.INTEGER,
    //   price : type.DECIMAL(18,2)
    },
    {
        timestamps: true,
        freezeTableName: true
    })
  
    Page.associate = function(models) {
        Page.belongsTo(models.PageWidget,{foreignKey : 'page_id',constraints: false})
      // ProductBoat.belongsTo(models.Product,{foreignKey : 'product_id',constraints: false})
    };
    return Page
  }
  