module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "12345",
  PORT: 3306,
  DB: "testdb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
