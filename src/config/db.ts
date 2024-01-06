import { Sequelize } from 'sequelize';
import * as mysql2 from 'mysql2';
const mode = process.env.NODE_ENV || 'dev';
const env = require('./env.json')[mode]['db'];

const sequelize = new Sequelize(env.database, env.username, env.password, {
    host: env.host,
    port: env.port,
    logging: true, // Disable the logging. It is consuming the time on lambda function.
    dialect: env.dialect,
    define: {
        timestamps: false
    },
    dialectModule: mysql2, // this is required to include mysql2 in deployment package on lambda
    // operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 20000,
        idle: 10000
    }
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};
