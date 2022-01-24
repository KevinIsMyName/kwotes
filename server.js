// server set-up, required modules
const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

const port = 3000;


app.use(cors());
app.use(express.static("public"));


const quotes = require("./quotes.json");


app.get("/", function (req, res) {
    res.sendFile(path.resolve("index.html"));
});

// this is for when then GET request is made from the client
app.get("/*", function (req, res) {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];

    const json = JSON.stringify({ quote: quote });
    res.send(json);
});


app.listen(port, function () {
    console.log(`Listening on port ${port}`);
});
