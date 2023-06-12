const sql = require('mssql');

//Config is where we have the connection requirements for the DB
//We are looking into putting the config in a new local file and importing it here for security reasons
//    ->>>>>>>>>>>>>>>>>  Will put this as a task in the next sprint.
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

//The pool variable is using the sql.ConnectionPool class with the config variable as a parameter to connect to the DB
const pool = new sql.ConnectionPool(config);
const poolConnect = pool.connect();
console.log("Connected to DB");

//We export the sql, poolConnect and pool variables so we can use them in index.js
module.exports = {
    sql, 
    poolConnect,
    pool,
};