const express=require('express');
const router=express.Router();
const {IITRUPDATES,validateiitrupdate}=require('../models/books')
//Create a new post
router.post('/',async (req,res)=>{
    const  error =await validateiitrupdate(req.body);
   if(error.message){res.status(400).send(error.message);}
   
    book=new IITRUPDATES({
      Topicname:req.body.Topicnameji,
      TopicImages:req.body.TopicImagesji,
      PostImages:req.body.PostImagesji,
      Postdescription:req.body.Postdescriptionji,
      Postvideo:req.body.Postvideoji,
     link1:req.body.link1ji,
     link2:req.body.link2ji,
     link3:req.body.link3ji
    });
    book.save().then((book)=>{
        res.send(book)

    }).catch((error)=>{
res.status(500).send("book was not stored in database")
    })
})
//get all iitrupdatespost
router.get('/',(req,res)=>{
    IITRUPDATES.find().then((books)=>{res.send(books)}).catch((error)=>{
        res.status(500).send("something went wrong");
    })
})
//get the specific iitrupdatespost
router.get("/:iitrid",async(req,res)=>{
    const book=await IITRUPDATES.findById(req.params.iitrid) 
        if(!book) res.status(404).send("book not found"); 

        res.send(book);
    
}) 
//update the specific iitrpost
router.put("/:iitrid",async(req,res)=>{
    const updatebook=await IITRUPDATES.findByIdAndUpdate(req.params.iitrid,{
        Topicname:req.body.Topicnameji,
        TopicImages:req.body.TopicImagesji,
        PostImages:req.body.PostImagesji,
        Postdescription:req.body.Postdescriptionji,
        Postvideo:req.body.Postvideoji,
        link1:req.body.link1ji,
        link2:req.body.link2ji,
        link3:req.body.link3ji
       
      },{new:true}) 
        if(!updatebook) res.status(404).send("book not found"); 

        res.send(updatebook);
    
}) 
//delete the specific post
router.delete("/:iitrid",async(req,res)=>{
    const deletebook=await IITRUPDATES.findByIdAndRemove(req.params.iitrid) 
        if(!deletebook) res.status(404).send("book not found"); 

        res.send(deletebook);
    
}) 
module.exports=router;