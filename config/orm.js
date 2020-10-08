
const connection = require("./connection.js");

// function objToSQl(ob)   {
//     var arr = [];

//     for (va)
// }

const orm = {
 selectAll: function(cb)    {
    const queryString = "SELECT * FROM burgers;"
    connection.query(queryString, function(err, result) {
        if (err) throw err;
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

updateOne: function(value, cb)  {
    const queryString = "UPDATE SET ? WHERE id = ?;"

}

// }
    // * `selectAll()`
    // * `insertOne()`
    // * `updateOne()`


}


// INSERT INTO favorite_foods(food, score) VALUES ("lasagna", 3);