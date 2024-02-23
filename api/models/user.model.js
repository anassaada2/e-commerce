import mongoose from 'mongoose' 
const userSchema = mongoose.Schema({
    username : {
        type : String ,
        requierd : true ,
        unique : true ,

    },
    email : {
        type : String ,
        requierd : true ,
        unique : true ,

    },
    password : {
        type : String ,
        requierd : true ,

    },
    
},{timestamps : true});
const user = mongoose.model('User',userSchema);
export default user ;