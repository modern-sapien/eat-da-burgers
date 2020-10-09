const express = require("express");
const router = express.Router();
const burger = require("../models/burgermodel.js");

router.get("/", function(req, res)  {
    console.log("did this get route happen?")
    burger.selectAll(function(data)   {
        const hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burger", function(req, res)  {
    console.log("did this post route happen?")
    burger.insertOne([
        "burger_name", "devoured"
    ],  [req.body.name, req.body.devoured],  function(data)    {
        res.json({ id: result });
    })
});

router.put("/api/burger/:id", function(req, res)   {
    const condition = "id = " + req.params.id;

    console.log("condition", condition);
    
    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function(result)  {
        if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
        } else {
        res.status(200).end();
        }
        location.reload();
    })
});

module.exports = router;