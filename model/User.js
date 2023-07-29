import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    FullName:{
        type:String,
        //required:true,
    },
    email:{
        type:String,
       // required:true,
         //unique:true,
    },
    mobile:{
        type:Number,
    },
    ConfirmPassword:{
        type:String,
        //required:true,
        //minlength:6,
    },
    Password:{
        type:String,
        //required:true,
        //minlength:6,
    },

    
});

export default mongoose.model("User",UserSchema);