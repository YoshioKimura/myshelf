var router = require("express").Router();
var connection = require('../mysqlConnection');

router.get("/", (req, res, next) => {
  var query = "SELECT * FROM books";
  connection.query(query , function(err , rows){
    console.log(rows);
    res.render("./index.ejs",{
      bookList:rows
    });

  });
});

module.exports = router;

