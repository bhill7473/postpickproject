module.exports = function(sequelize, Sequelize) {
 
    var Userdata = sequelize.define('userdata', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        playername: {
            type: Sequelize.STRING,
            notEmpty: true
        },
 
        position: {
            type: Sequelize.STRING,
            notEmpty: true
        },
 
        team: {
            type: Sequelize.STRING,
        },
 
        fanpoints: {
            type: Sequelize.INTEGER,
        },
 
        status: {
            type: Sequelize.ENUM('active', 'inactive'),
            defaultValue: 'active'
        },
         created_at: {
      type: Sequelize.DATE,
      allowNull: false
    },
    updated_at:  Sequelize.DATE,
    deleted_at: Sequelize.DATE
  }, {
    underscored: true
 
 
 
    });
  Userdata.associate = function(models) {

    Userdata.belongsTo(models.user, {
      foreignKey: {
    allowNull: false
     }
   });
  };
    return Userdata;
 
}