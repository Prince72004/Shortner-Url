const express = require("express");
const { dbconnection } = require("./connection/dbconnection");
const urlroutes = require("./routes/urlroutes");
const path=require(path);
const app = express();
// dbconnection("mongodb://127.0.0.1:27017/urlshortner");
const PORT = process.env.PORT || 3030;
dbconnection(process.env.MONGO_URI);

app.set("view engine" ,"ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/url", urlroutes);
app.get("/", (req, res) => {
    res.send("URL Shortener API Running");
});



app.listen(PORT, () => {
    console.log(`server started at ${PORT}`);
});