"use client"

import axios from "axios";
import { useRouter } from "next/navigation"
const {  createContext,useState } = require("react")


const AuthContext = createContext("");

export const AuthProvider=({children})=>{
    const [user,setUser]=useState(null)
    // const [error,setError]=useState(null)

    const router = useRouter()
// ******************* 
// let axiosConfig = {
//     headers: {
//         'Content-Type': 'application/json;charset=UTF-8',
//         "Access-Control-Allow-Origin": "*",
//     }
//   };
// *******************
    const registerUser = async({name,email,password})=>{
        try {
            const {data}= await axios.post(
                `${process.env.API_URL}/api/auth/register`,
                {
                    name,
                    email,
                    password
                },
                // axiosConfig
            )
             if(data?.user) {
                router.push("/")
            }
            }
        // const {data}= fetch(`${process.env.API_URL}/api/auth/register`, {
        //     method: 'POST',
        //     headers: {
        //       Authorization: `Bearer ${getAccessToken()}`,
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(registerUser),
        //   });

           

         catch (error) {
            setError(error?.response?.data?.message)
        }
    }
 
    return (
        <AuthContext.Provider
        value={{
           registerUser,
           user,
        }}
        >{children}</AuthContext.Provider>
    )
}

export default AuthContext



// ******************
