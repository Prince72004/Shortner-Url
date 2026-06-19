const express = require("express");
const { dbconnection } = require("./connection/dbconnection");
const urlroutes = require("./routes/urlroutes");
const app = express();
dbconnection("mongodb://127.0.0.1:27017/urlshortner");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/url", urlroutes);


app.listen(3030, () => {
    console.log("server started at 3030 port ");
})