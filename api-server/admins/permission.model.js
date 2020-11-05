module.exports = (sequelize, type) => {
  var permission = sequelize.define('permission', {
    id : {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    key : {
      type : type.STRING,
      unique: true
    },
    name : type.STRING,
  },
  {
      timestamps: true,
      freezeTableName: true
  })

  return permission;
}
