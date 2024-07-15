
const mysql = require('mysql2');


// create a database connection in your application using a Sequelize instance and the config file
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'readmovie'
});

//verify your connection here !
// connection.authenticate();

//  create your table using sequilize
// const TableName = connection.define("phrases", {
 
// });

// this call, Sequelize will automatically perform an SQL query to the database and create a table, printing the message phrase table created successfully!.
// please run this below *****one time***** after creating your connection

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('DB is Connected ')
  }
});


module.exports={
  connection
}
// export your Model Phrase below














