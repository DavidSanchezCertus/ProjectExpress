require('dotenv').config();
const sequelize = require('./database');
const { api, PORT } = require('./api');


sequelize.authenticate()
  .then(() => console.log('Database connected'))
  .catch((err) => console.log('Error connecting to database', err));


api.listen(PORT, () => {
    console.log('Server http://localhost:' + PORT)
});