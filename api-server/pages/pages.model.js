module.exports = (sequelize, type) => {
    var Page  = sequelize.define('pages', {
      id : {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title : type.STRING,
      description : type.TEXT,
      keyword : type.TEXT,
      path : type.STRING,
      image : type.STRING,
      deleted : {
        type : type.INTEGER,
        defaultValue : 0
      }
    //   price : type.DECIMAL(18,2)
    },
    {
        timestamps: true,
        freezeTableName: true
    })
  
    Page.associate = function(models) {
        // Page.belongsTo(models.PageWidget,{foreignKey : 'page_id',constraints: false})
      // ProductBoat.belongsTo(models.Product,{foreignKey : 'product_id',constraints: false})
    };
    return Page
  }
  