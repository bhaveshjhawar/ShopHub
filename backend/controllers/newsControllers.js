import News from "@/backend/models/newsletter"

export const newsRegister = async(req,res)=>{
    const {name,email} = req.body
    
    const news =await News.create({
        name,
        email
    })

    res.status(201).json({
        news
    })

}