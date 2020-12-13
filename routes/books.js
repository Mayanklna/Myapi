const express=require('express');
const router=express.Router();
const Book=require('../models/books')
//Create a new post
router.post('/',(req,res)=>{
    book=new Book({
      Topicname:req.body.Topicnameji,
      TopicImages:req.body.TopicImagesji,
      PostImages:req.body.PostImagesji,
      Postdescription:req.body.Postdescriptionji,
      Postvideo:req.body.Postvideoji
     
    });
    book.save().then((book)=>{
        res.send(book)

    }).catch((error)=>{
res.status(500).send("book was not stored in database")
    })
})
module.exports=router;