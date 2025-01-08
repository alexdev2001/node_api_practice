// file to initialize sequelize and load data models
// as well as define relationships between the models

const { Sequelize, DataTypes } = require('sequelize');
const config: any = require('../config');

// initialize the sequelize database with credentials from the config file
const sequelize = new Sequelize(
    config.development.database,
    config.development.username,
    config.development.password,
    {
        host: config.development.host,
        dialect: config.development.dialect,
    },
);

// create a database instance
const db: any = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// load the models
db.user = require('./user')(sequelize, DataTypes);
db.book = require('./book')(sequelize, DataTypes);

// establish relationships between the entities
db.user.hasMany(db.book, { as: 'book', foreignKey: 'userId' });
db.book.belongsTo(db.user, { as: 'user', foreignKey: 'userId' });


module.exports = db;