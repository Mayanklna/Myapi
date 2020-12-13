const mongoose=require('mongoose');


//iitrupdates scema
const iitrupdatesscema=new mongoose.Schema({
    Topicname:{
         type:String,
         required:true,
         minlength:3,
         maxlength:40
    },
    TopicImages:{
        type:String,
        required:true,
        minlength:3,
        maxlength:2000
    },
    PostImages:{
        type:String,
        required:true,
        minlength:3,
        maxlength:2000
    },
    Postdescription:{
        type:String,
        required:true,
        minlength:3,
        maxlength:3000
    },
    Postvideo:{
        type:String,
        required:true,
        minlength:3,
        maxlength:2000
    }

})
module.exports=new mongoose.model('IITRUPDATES',iitrupdatesscema);