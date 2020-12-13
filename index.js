const express=require('express');
const mongoose=require('mongoose');
const winston=require('winston');
const app=express();
const booksroutes=require('./routes/books')
require('dotenv').config();
//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//create a logger 
const logger = winston.createLogger({
    level: 'info',
    transports: [
      new winston.transports.Console({
          format:winston.format.combine(
              winston.format.colorize({all:true})
          )
      }),
      new winston.transports.File({ filename: 'error.log', level: 'error'})
    ],
    exceptionHandlers: [
        new winston.transports.File({ filename: 'exceptions.log' })
      ]
  });
//routes
app.use('/iitrupdates',booksroutes);
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true },{ useUnifiedTopology: true }).then(()=>{
logger.log("info","connected to mongodb atlas")
}).catch((error)=>{
logger.log("error",error)
});

const PORT=process.env.PORT ||3000
app.listen(PORT,()=>{
   logger.log("warn","Server started at PORT",PORT);
});