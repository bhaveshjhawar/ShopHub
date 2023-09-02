



import dbConnect from '@/backend/config/dbconnect'
import {registerUser} from "@/backend/controllers/authControllers"


export default async (req, res) => {
  await dbConnect()

  const { method } = req

  switch (method) {
    // case 'GET':
    //     try {
         
    //       // const products = await Product.find({})
    //     await getProducts(req, res)
    //     res.status(200).json({ success: true ,products})
    //     } catch (error) {
    //       res.status(400).json({ success: false })
    //     }
    //     break

      case 'POST':
        try {
        //   const product = await Product.create(req.body)
        await registerUser(req, res)
          res.status(201).json({ success: true})
        } catch (error) {
          res.status(400).json({ success: false })
        }
        break

    default:
      res.status(400).json({ success: false })
      break
  }
}