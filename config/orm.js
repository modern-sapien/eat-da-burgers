const connection = require("./connection.js");


// function objToSql(ob) {
//     var arr = [];
//     for (var key in ob) {
//       var value = ob[key];
//       if (Object.hasOwnProperty.call(ob, key)) {
//         if (typeof value === "string" && value.indexOf(" ") >= 0) {
//           value = "'" + value + "'";
//         }
//         arr.push(key + "=" + value);
//       }
//     }
// }

// function printQuestionMarks(num) {
//   var arr = [];
//   for (var i = 0; i < num; i++) {
//     arr.push("?");
//   }
//   return arr.toString();
// }


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