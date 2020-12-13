const express=require('express');
const mongoose=require('mongoose');
const app=express();
require('dotenv').config();
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true },{ useUnifiedTopology: true }).then(()=>{
console.log("connected to mongodb atlas")
}).catch(()=>{
    console.log("Something wrong happen")
});

const PORT=process.env.PORT ||3000
app.listen(PORT,()=>{
    console.log("Server started at PORT",PORT);
});