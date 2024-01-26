const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;


app.use(bodyParser.json());


app.get("/",(req,res)=>{
    res.json({status:200,msg:"Setting Up Git repo"})
});

app.listen(port);
