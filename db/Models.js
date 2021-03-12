const { STRING } = require('sequelize'); // add more here
const db = require('./db');

const Xenomorph = db.define('xenomorph', {
  name: {
    type: STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },
  growth: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  size: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  ability: {
    type: STRING,
    unique: true,
  },
});

const Media = db.define('media', {
  name: {
    type: STRING,
  },
});

Media.hasMany(Xenomorph);
Xenomorph.belongsTo(Media);

module.exports = {
  Xenomorph,
  Media,
};
