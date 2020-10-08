const express = require("express");
const router = express.Router();

const burger = require("../models/burgermodel.js");

router.get("/", function(req, res)  {
    burger.all(function(data)   {
        const hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res)  {
    burger.create([
        "name"
    ],  [req.body.name
    ],  function(result)    {
        res.json({id: result.insertId})
    })
});

router.put("/api/burgers/:id", function(req, res)   {
    const condition = "id = " + req.params.id;
    console.log("condition", condition);
    burger.update({
        devoured: req.body.devoured
    }, condition, function(result)  {
        if (result.changedRows == 0)    {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
});

module.exports = router;