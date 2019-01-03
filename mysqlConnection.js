var mysql = require('mysql');

//local用
// var dbConfig = {
//   host: '127.0.0.1',
//   user: 'root',
//   password: '',
//   database: 'bulletin_issue'
// };


//ここに書く

var dbConfig = {
  host: 'us-cdbr-iron-east-01.cleardb.net',
  user: 'b51f27ffa98348',
  password: '48e7e23f',
  database: 'heroku_c0eef81e13c3c73'
};


ysql://b81de1fc97d0cf:0ea4d4bf@us-cdbr-iron-east-03.cleardb.net/heroku_570104d33486c83?reconnect=true


var connection = mysql.createConnection(dbConfig);

setInterval(function() {
  connection.query('SELECT 1');
}, 50000);



module.exports = connection;