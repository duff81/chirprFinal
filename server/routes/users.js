const express = require ("express");
let router =express.Router();

router.get("/",(req,res)=>{
res.send("users")});

module.exports=router;