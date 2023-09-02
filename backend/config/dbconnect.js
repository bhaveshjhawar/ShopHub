// import mongoose from 'mongoose'
// require('dotenv').config();

// const dbconnect = ()=>{
//     if(mongoose.connection.readyState >= 1){
//         return 
//     }

//     mongoose.set("strictQuery",false)
//     mongoose.connect("mongodb+srv://bhaveshjhawar09:bhaveshonmongodbatlas09@cluster0.dtb55eb.mongodb.net/Ecommerce?retryWrites=true&w=majority")
// }

// export default dbconnect


// utils/dbConnect.js

const mongoose = require('mongoose')

const connection = {}

async function dbConnect() {
  if (connection.isConnected) {
    return
  }

  const db = await mongoose.connect("mongodb+srv://bhaveshjhawar09:bhaveshonmongodbatlas09@cluster0.dtb55eb.mongodb.net/Ecommerce?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  connection.isConnected = db.connections[0].readyState
}

module.exports = dbConnect
