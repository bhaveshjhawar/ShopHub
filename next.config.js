/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        API_URL:"http://localhost:3000",
        DB_ENV:"mongodb+srv://bhaveshjhawar09:bhaveshonmongodbatlas09@cluster0.dtb55eb.mongodb.net/Ecommerce?retryWrites=true&w=majority"
    },
    images:{
        domains:["res.cloudinary.com"]
    }
}

module.exports = nextConfig
