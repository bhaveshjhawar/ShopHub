"use client"
// import {CartProvider} from "@/context/CartContext"
// import { AuthProvider } from "@/context/AuthContext"
// import { NewsProvider } from "@/context/NewsContext"
import {SessionProvider} from "next-auth/react"

export default function GlobalProvider({children}){
    return
    // <AuthProvider>
    // <NewsProvider>
    // <CartProvider>
    <SessionProvider>
    {children}
    </SessionProvider>
    // </CartProvider>
    // </NewsProvider>
    // </AuthProvider>
}