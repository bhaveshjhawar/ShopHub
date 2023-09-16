import dbConnect from "@/backend/config/dbconnect"
import {newsRegister} from "@/backend/controllers/newsControllers"

export default async(req,res)=>{
    // Connecting to the database
    await dbConnect()

    // Making the different methods as a const and then making then switch cases 
    const {method} = req

    switch(method){

        // For the POST request
        case 'POST':
            try{
                // using the newsRegister function and passing the req,res from the query 
                await newsRegister(req,res) 
                res.status(201).json({success:true})
            }catch(error) {
                res.status(400).json({ success: false })
              }
              break

              default:
      res.status(400).json({ success: false })
      break
    }
}