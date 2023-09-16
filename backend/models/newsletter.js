import mongoose from 'mongoose'

const newsSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please"]
    },
    email:{
        type:String,
        required:[true,"Please"],
        unique:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }


})

export default mongoose.models.News || mongoose.model("News",newsSchema)