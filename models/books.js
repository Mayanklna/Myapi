const mongoose=require('mongoose');
const yup=require('yup');

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
        maxlength:5000
    },
    Postvideo:{
        type:String,
        required:true,
        minlength:3,
        maxlength:2000
    }

})
const validateiitrupdate=(book) =>{
    const schema=yup.object().shape({
        Topicnameji:yup.string().required().min(3).max(40),
        TopicImagesji:yup.string().required().min(3).max(2000),
        PostImagesji:yup.string().required().min(3).max(2000),
        Postdescriptionji:yup.string().required().min(3).max(5000),
        Postvideoji:yup.string().required().min(3).max(2000),
 });
 return schema.validate(book).then((book)=>book).catch((error) =>{
     return {
         message:error.message
        }
 });
}
exports.IITRUPDATES=new mongoose.model('IITRUPDATES',iitrupdatesscema);
exports.validateiitrupdate=validateiitrupdate;