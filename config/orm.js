const connection = require("./connection.js");

const orm = {

    selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

insertOne: function(value, cb)    {
    const queryString = "INSERT INTO burgers(burger_name) VALUES (?);"
    connection.query(queryString, [value], function(err, result) {
        if (err) throw err;
        cb(result);
    });
},

insertOne: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;
    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },


}

module.exports = orm;

// INSERT INTO favorite_foods(food, score) VALUES ("lasagna", 3);