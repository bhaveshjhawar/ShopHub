import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please"]
    },
    email:{
        type:String,
        required:[true,"Please"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"please"],
        minLength:[6,"Please"],
        select:false
    },
    avatar:{
        public_id:String,
        url:String
    },
    role:{
        type:String,
        default:'user'
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }


})

export default mongoose.models.User || mongoose.model("User",userSchema)