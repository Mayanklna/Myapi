const express=require('express');
const mongoose=require('mongoose');
const app=express();
const booksroutes=require('./routes/books')
require('dotenv').config();
//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//routes
app.use('/iitrupdates',booksroutes);
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true },{ useUnifiedTopology: true }).then(()=>{
console.log("connected to mongodb atlas")
}).catch(()=>{
    console.log("Something wrong happen")
});

const PORT=process.env.PORT ||3000
app.listen(PORT,()=>{
    console.log("Server started at PORT",PORT);
});