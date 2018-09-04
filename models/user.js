module.exports = function(sequelize, Sequelize) {
 
    var User = sequelize.define("User", {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        
        username: {
            type: Sequelize.STRING
        },
 
        car: {
            type: Sequelize.STRING
        },
 
        email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true
            }
        },
 
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },

        location: {
            type: Sequelize.STRING,
            allowNull: false
        },
 
        lastLogin: {
            type: Sequelize.DATE
        },
 
        status: {
            type: Sequelize.ENUM("active", "inactive"),
            defaultValue: "active"
        }
 
 
    });
 
    return User;
 
};