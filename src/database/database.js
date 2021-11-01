const mariadb = require('mariadb');
const config = require('config');

const pool = mariadb.createPool({
    host: config.get('database.host'),
    user: config.get('database.username'),
    password: config.get('database.password'),
    connectionLimit: config.get('database.connectionLimit'),
    database: config.get('database.database'),
    port: config.get('database.port')
});

module.exports = pool;