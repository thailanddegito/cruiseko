module.exports = (sequelize, type) => {
  var BlogCategory  = sequelize.define('blog_category', {
    id : {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name : {
      type : type.STRING,
      allowNull : false
    },
    order : {
      type : type.INTEGER,
      defaultValue : 1000
    },
    deleted : {
      type : type.INTEGER,
      defaultValue :0,
      allowNull : false
    }
    
    
  },
  {
      timestamps: false,
      freezeTableName: true
  })

  BlogCategory.associate = function(models) {
    BlogCategory.hasMany(models.Blog,{foreignKey : 'cate_id',constraints: false})
  };
  return BlogCategory
}
