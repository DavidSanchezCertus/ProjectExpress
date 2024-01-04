const config = {
    USER: process.env.DB_USER ,
    PASS: process.env.DB_PASSWORD ,
    HOST: process.env.DB_SERVER,
    DATABASE: process.env.DB_DATABASE,
    DIALECT: 'mssql'
}

module.exports = config;