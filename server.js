const connectDB = require("./config/db");
const express=require("express");
const app=express();
const User = require("./models/User");

require('dotenv').config();

//middleware
app.use(express.json());

//connect DB
connectDB();

//test route
app.get("/",(req,res)=>{
    res.send("API Running");
});

//register API
app.post("/register", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json(user);
});

//debug 
console.log("MONGO_URI:", process.env.MONGO_URI);

app.listen(5000,()=> console.log("Server started"));


