module.exports = (sequelize, type) => {
  var Blog  = sequelize.define('blog', {
    id : {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    cate_id : type.INTEGER,
    type : {
      type : type.STRING,
      defaultValue : 'news'
    },
    name : {
      type : type.STRING,
      allowNull : false
    },
    short_description : type.TEXT,
    description : type.TEXT,
    publish_date : type.DATE,
    // deleted : {
    //   type : type.INTEGER,
    //   defaultValue :0,
    //   allowNull : false
    // }
    
    
  },
  {
      timestamps: true,
      freezeTableName: true
  })

  Blog.associate = function(models) {
    Blog.belongsTo(models.BlogCategory,{foreignKey : 'cate_id',constraints: false})
  };
  return Blog
}
