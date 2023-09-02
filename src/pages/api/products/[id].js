import dbConnect from '@/backend/config/dbconnect'
import Product from '@/backend/models/product'
import { getProduct } from '@/backend/controllers/productControllers'

export default async (req, res) => {
  await dbConnect()

  const {query: { id, keyword }, method } = req

  switch (method) {
    case 'GET':
        if (id) {
            try {
              const product = await Product.findById(id) // Check for isDeleted: false
              if (!product) {
                return res.status(404).json({ error: 'Product not found' })
              }
              res.status(200).json(product)
            } catch (error) {
              res.status(500).json({ error: 'Error fetching product' })
            }
          }
    


    default:
      res.status(400).json({ success: false })
      break
  }
}