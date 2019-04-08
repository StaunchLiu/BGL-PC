const express=require("express");
const indexRouter=require("./routes/index_route.js");
const pool=require("./pool");
var app=express();
app.listen(3000);
app.use(express.static("public"));
//跨域
const cors=require('cors');
app.use(cors({
    origin:["http://127.0.0.1:3000","http://localhost:5500"],
    credentials:true
}))
app.use("/index",indexRouter);