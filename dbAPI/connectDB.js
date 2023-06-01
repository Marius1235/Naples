const sql = require('mssql');

const config = {
    server: 'munchi-serv.database.windows.net',
    database: 'munch-db',
    user: 'munch-adm',
    password: 'Heyholetsgo1',
    options: {
        encrypt: true,
        trustServerCertificate: false,
    },
};

const pool = new sql.ConnectionPool(config);
const poolConnect = pool.connect();

module.exports = {
    sql, 
    poolConnect,
    pool,
};