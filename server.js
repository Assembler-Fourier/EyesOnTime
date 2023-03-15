const express = require("express");
const app = express();
const indexRoutes = require("./routes/index.route");

const Sequelize = require('sequelize');
const sequelize = new Sequelize('movie', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');

    sequelize.query('SELECT * FROM movie_table', {
      type: Sequelize.QueryTypes.SELECT,
    })
    .then((movies) => {
      console.log('The Movies are:', movies);
      sequelize.close();
    })
    .catch((err) => {
      console.error('Unable to retrieve movies:', err);
      sequelize.close();
    });
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
