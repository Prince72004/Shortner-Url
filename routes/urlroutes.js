const express = require("express");
const { handleurlrequest ,handleredirecturl,handleanalytics } = require("../controller/urlcontroller");
const shortid = require("shortid");


const router = express.Router();

router.post("/", (req,res)=>{
    res.render("index");
});
router.post("/", handleurlrequest);

router.get("/:shorturl",  handleredirecturl);

router.get("/analytics/:shorturl",  handleanalytics);



module.exports = router;