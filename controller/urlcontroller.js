const shortid = require("shortid");
const mongoose = require("mongoose");
const urlmodel = require("../models/url");
 
 
 async function handleurlrequest(req, res)  {
    const body = req.body;
    if (!body.url) res.send("add url first");
    const short_id = shortid(8);
    const url = await urlmodel.create({
        shorturl:short_id,
        redirectedurl: body.url,
        viewhistory: []
    })
    res.send(url);
}
async function handleredirecturl(req,res) {
        let shorturl=req.params.shorturl;

    let entry= await urlmodel.findOneAndUpdate({shorturl},
        {
        $push:{
      viewhistory:{ timestamp:Date.now()
      },
    }
})
    res.redirect(entry.redirectedurl)
}

async function handleanalytics(req,res) {
        let shorturl=req.params.shorturl;

    let result= await urlmodel.findOne({shorturl})
   
    res.json({
        totalclicks: result.viewhistory.length,
        analytics:result.viewhistory
    })
}


module.exports={handleurlrequest,handleredirecturl,handleanalytics};