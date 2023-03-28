const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize('movie', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

  const Book = sequelize.define("bookss", {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false
    },
    release_date: {
      type: DataTypes.DATEONLY,
    },
    subject: {
      type: DataTypes.INTEGER,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: {
          args: 100,
          msg: "Price must be greater than or equal to 100."
        }
      }
    }
 });
 

sequelize.sync()
  .then(() => {
    console.log('Book table created successfully!');
  })
  .catch((error) => {
    console.error('Unable to create table:', error);
  });
  
  sequelize.sync().then(() => {
     console.log('Book table created successfully!');
  
     Book.create({
         title: "Clean Code",
         author: "Robert Cecil Martin",
         release_date: "2021-12-14",
         subject: 3,
         price: 101
     }).then(res => {
         console.log(res)
     }).catch((error) => {
         console.error('Failed to create a new record : ', error);
     });

     Book.findOne({
      where: {
          id : "1"
      }
    }).then(res => {
        console.log(res)
    }).catch((error) => {
        console.error('Failed to retrieve data : ', error);
  });
  Book.destroy({
    where: {
      id: 3
    }
}).then(() => {
    console.log("Successfully deleted record.")
}).catch((error) => {
    console.error('Failed to delete record : ', error);
});

  
  }).catch((error) => {
     console.error('Unable to create table : ', error);
  });