require('dotenv').config();
const connectDB = require("./config/db");
const express=require("express");
const app=express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("API Running");
})
app.listen(5000,()=> console.log("Server started"));
console.log("MONGO_URI:", process.env.MONGO_URI);
connectDB();