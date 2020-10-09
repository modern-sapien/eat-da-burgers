const express = require("express");
const router = express.Router();
const burger = require("../models/burgermodel.js");

router.get("/", function(req, res)  {
    console.log("did this get route happen?")
    burger.all(function(data)   {
        const hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res)  {
    console.log("did this post route happen?")
    burger.create("burger_name", req.body.burger_name,
    function(result)    {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res)   {
    console.log("Did this put route happen?")
    const condition = req.params.id;
    console.log("condition", condition);
    
    burger.update("devoured", condition, function(result)   {
        if (result.changedRows == 0) {
        return res.status(404).end();
        } else {
        res.status(200).end();
        }
    })
});

module.exports = router;