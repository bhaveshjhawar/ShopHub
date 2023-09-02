// import {createRouter} from 'next-connect'
// import dbconnect from '@/backend/config/dbconnect'
// import { newProduct } from '@/backend/controllers/productControllers'
// import onError from '@/backend/middleware/error'

// const router = createRouter()

// dbconnect()

// router.post(newProduct)

// export default router.handler()



// import dbConnect from '@/backend/config/dbconnect';
// import { newProduct } from '@/server/controllers/productControllers';

// export default async function handler(req, res) {
//   try {
//     dbConnect();
//     await newProduct(req, res);
//   }
//   catch (error) {
//     res.status(500).json({ error: 'Server error' });
//   }
// }



import dbConnect from '@/backend/config/dbconnect'
import Product from '@/backend/models/product'
import { newProduct, getProducts } from '@/backend/controllers/productControllers'

export default async (req, res) => {
  await dbConnect()

  const { method } = req

  switch (method) {
    case 'GET':
        try {
         
          // const products = await Product.find({})
        await getProducts(req, res)
        res.status(200).json({ success: true })
        } catch (error) {
          res.status(400).json({ success: false })
        }
        break

      case 'POST':
        try {
          const product = await Product.create(req.body)
        // await newProduct(req, res)
          res.status(201).json({ success: true, product })
        } catch (error) {
          res.status(400).json({ success: false })
        }
        break
    default:
      res.status(400).json({ success: false })
      break
  }
}




// *****************

// import dbConnect from '@/backend/config/dbconnect';
// import { newProduct , getProducts} from '@/backend/controllers/productControllers';

// export default async function handler(req, res) {
//   try {
//     dbConnect();
//     await newProduct(req, res);
//     await getProducts(req,res);

//   }
//   catch (error) {
//     res.status(500).json({ error: 'Server error' });
//   }
// }