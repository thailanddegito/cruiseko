"use strict";
module.exports = (sequelize, type) => {
    const User =  sequelize.define('users', {
        id: {
            type: type.STRING(30),
            primaryKey: true
        },
        username : {
            type: type.STRING,
            allowNull : false
        },
        email : {
            type: type.STRING,
            allowNull : false
        },
        password : {
            type: type.STRING,
            allowNull : false
        },
        user_type : {
            type: type.STRING(20),
            allowNull : false,
            defaultValue : 'fit'
        },

        image_logo : type.STRING,
        company_type : type.STRING,
        company_name_en : type.STRING,
        company_name_th : type.STRING,
        license_no : type.STRING,

        address : type.STRING(300),
        province : type.STRING,
        amphoe : type.STRING,
        district : type.STRING,
        zipcode : type.INTEGER,
        company_phone : type.STRING,
        company_email : type.STRING,
        firstname : type.STRING,
        lastname : type.STRING,
        position : type.STRING,
        firstname : type.STRING,
        phone : type.STRING,
        line_id : type.STRING,

        image_license : type.STRING,
        approve_status : {
            type : type.INTEGER,
            allowNull : false,
            defaultValue : 0
        },
        status : {
            type : type.INTEGER,
            allowNull : false,
            defaultValue : 1
        },
        license_expired_date : type.DATE,
        approve_date : type.DATE,
        approve_by : type.STRING,
        problem_note : type.TEXT,
        problem_by : type.STRING,
        updated_by_admin : type.STRING,
        updated_by_admin_date : type.DATE,

    },
    {
        freezeTableName: true,
        paranoid : true
    })

    // User.associate = function(models) {
    //     User.belongsToMany(models.Physician, { through: "Appointment", foreignKey: "patientId" });
    // };

    return User;
}