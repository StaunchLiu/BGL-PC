const pool=require("../pool.js");
const express=require("express");
const router=express.Router();

router.get("/",(req,res)=>{
//在这里面写内容
res.send({code:1,msg:''})
})


module.exports=router;