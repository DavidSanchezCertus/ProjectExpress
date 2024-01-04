const sequelize = require('./database/index.js');

// Conectando base de datos
  await sequelize.authenticate()
  .then(() => console.log('Database connected'))
  .catch((err) => console.log('Error connecting to database', err));