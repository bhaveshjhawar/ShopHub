import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

import User from "@/backend/models/user"
import bcrypt from "bcryptjs"
import dbConnect from "@/backend/config/dbconnect"

export default async function auth(req,res){
    return await NextAuth(req,res,{
        session:{
            strategy:"jwt"
        },
        providers:[
            CredentialsProvider({
                async authorize(credentials,req){
                    dbConnect();

                    const {email,password} = credentials

                    const user = await User.findOne({email}).select("+password")

                    if(!user){
                        throw new Error("Invalid Email")
                    }

                    // const isPasswordMatched = await bcrypt.compare(
                    //     password,
                    //     user.password
                    // )

                    bcrypt.compare(password, user.password, function(err, res) {

                        if (res) {
                        //   console.log("pw matched");
                          return user 
                        } else {
                          return  new Error("Invalid pw")
                        }
                      });
                      return user 
                }
            })
        ],
        pages:{
            signIn:"/login"
        },
        secret: process.env.NEXTAUTH_SECRET,
    })
}