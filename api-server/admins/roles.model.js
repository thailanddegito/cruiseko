module.exports = (sequelize, type) => {
  var Role  = sequelize.define('roles', {
    id : {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name : type.STRING,
    level : type.INTEGER,
  },
  {
      timestamps: true,
      freezeTableName: true
  })

  Role.associate = function(models) {
    Role.hasMany(models.RoleHasPermission,{foreignKey : 'role_id',constraints: false})
  };
  return Role
}
