module.exports = function(sequelize, Sequelize) {

var FanRecord = sequelize.define("FanRecord", {
  lname: {
    type: Sequelize.STRING, allowNull: false
  },
  position: {
    type: Sequelize.STRING, allowNull: false
  },
  gamedate: {
    type: Sequelize.DATE, allowNull: false
  },
  fanpoints: {
    type: Sequelize.INTEGER, allowNull: false
  },
  minsplayed: {
    type: Sequelize.INTEGER, allowNull: false
  },
  wongame: {
    type: Sequelize.BOOLEAN, allowNull: false
  },
  injured: {
    type: Sequelize.BOOLEAN, allowNull: false
  },
  teamactpts: {
    type: Sequelize.INTEGER, allowNull: false
  },
  oppactpts: {
    type: Sequelize.INTEGER, allowNull: false
  },
  team: {
    type: Sequelize.STRING, allowNull: false
  },
  opponent: {
    type: Sequelize.STRING, allowNull: false
  },
  notes: {
    type: Sequelize.STRING
  },
  userid: {
    type: Sequelize.STRING
  },
  entryid: {
    type: Sequelize.STRING, allowNull: false
  }
});

/* FanRecord.associate = function(models) {

    FanRecord.hasOne(models.userdata, {
      onDelete: "cascade"
    });
  };*/

//********************/
// InSync with the DB /
//********************/
return FanRecord;

}
