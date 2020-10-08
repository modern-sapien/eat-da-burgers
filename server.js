const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql")

const app = express();

const PORT = process.env.PORT || 8080;

// Use the express.static middleware to serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// VIEWS ROUTES
app.get("/", (req, res) =>  {
    res.render("index")
});


app.get("/api/config",  (req, res)  =>  {
    res.json({
        success:true,
    })
})

app.listen(PORT, () =>  {
    console.log(`Server is running on http://localhost:${PORT}`)
})