const connection = require("./connection.js");




const orm = {

    selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], function(err, result) {
      if (err)        throw err;
      cb(result);
    });
  },

insertOne: function(tableInput, cols, vals, cb) {
    let queryString = `INSERT INTO ${tableInput} (${cols}) VALUES ("${vals}")`

    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    })
  },

   // An example of objColVals would be {name: panther, sleepy: true}
   updateOne: function(tableInput, thingToUpdate, burgerId, cb) {
    let queryString = `UPDATE ?? SET ?? = true WHERE id = ?`;
    connection.query(queryString, [tableInput, thingToUpdate, burgerId],
      function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },

}

module.exports = orm;

// INSERT INTO favorite_foods(food, score) VALUES ("lasagna", 3);