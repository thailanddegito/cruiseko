module.exports = (sequelize, type) => {
  var role_has_permission = sequelize.define('role_has_permission', {
    role_id : {
      type: type.INTEGER,
      primaryKey: true,
      // autoIncrement: true
    },
    permission_id : {
      type: type.INTEGER,
      primaryKey: true,
      // autoIncrement: true
    },
  },
  {
      timestamps: true,
      freezeTableName: true
  })

  return role_has_permission;
}