module.exports = (sequelize, type) => {
    var PageWidget  = sequelize.define('pages_widgets', {
      id : {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      page_id : type.INTEGER,
      widget_name : type.STRING,
      widget_type : type.INTEGER,
      content1 : type.TEXT,
      content2 : type.TEXT,
      image1 : type.STRING,
      image2 : type.STRING,
      alt1 : type.STRING,
      alt2 : type.STRING,
      link1 : type.STRING,
      link2 : type.STRING,
      order : type.INTEGER,
    //   price : type.DECIMAL(18,2)
    },
    {
        timestamps: true,
        freezeTableName: true
    })
  
    PageWidget.associate = function(models) {
        // Page.belongsTo(models.PageWidget,{foreignKey : 'page_id',constraints: false})
      // ProductBoat.belongsTo(models.Product,{foreignKey : 'product_id',constraints: false})
    };
    return PageWidget
  }
  