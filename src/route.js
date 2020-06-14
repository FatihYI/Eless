const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createPool({
  host: 'localhost', // Your connection adress (localhost).
  user: 'root', // Your database's username.
  password: '', // Your database's password.
  database: 'eless', // Your database's name.
});

//Insert methode

// connection.connect(function (err) {
//   if (err) {
//     throw err;
//   }
//   console.log('Connected!');
//   //Insert a record in the "customers" table:
//   var sql =
//     "INSERT INTO userdaten (username, passwort) VALUES ('Sari Hafiz', '123')";
//   connection.query(sql, function (err, result) {
//     if (err) {
//       throw err;
//     }
//     console.log('1 record inserted');
//   });
// });

//Select Methode
// connection.connect(function (err) {
//   if (err) {
//     throw err;
//   }
//   //Select all customers and return the result object:
//   connection.query('SELECT * FROM userdaten', function (err, result, fields) {
//     if (err) {
//       throw err;
//     }
//     console.log(result);
//   });
// });

// Müll

// Starting our app.
const app = express();

// Creating a GET route that returns data from the 'userdaten' table.
app.get('/user', function (req, res) {
  // Connecting to the database.
  connection.getConnection(function (err, connection) {
    // Executing the MySQL query (select all data from the 'users' table).
    connection.query('SELECT * FROM user', function (error, results, fields) {
      // If some error occurs, we throw an error.
      if (error) {
        throw error;
      }

      // Getting the 'response' from the database and sending it to our route. This is were the data is.
      res.send(results);
    });
  });
});

// Starting our server.
app.listen(3000, () => {
  console.log('Go to http://localhost:3000/user so you can see the data.');
});
