"use client";

import Link from "next/link";
import React, { useState, useContext } from "react";
// import NewsContext from "@/context/NewsContext"
import NewsContext from "@/context/NewsContext"


const NewsLetter = () => {
  const { newsRegister} = useContext(NewsContext)
  
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")


  const submitHandler=(e)=>{
    e.preventDefault()

    newsRegister({name,email})

}

  return (
    <div
      style={{ maxWidth: "480px" }}
      className="mt-10 mb-20 p-4 md:p-7 mx-auto rounded bg-white shadow-lg"
    >
      <form onSubmit={submitHandler}>
        <h2 className="mb-5 text-2xl font-semibold">Register For NewsLetter</h2>

        {/*    For Name */}
        <div className="mb-4">
          <label className="block mb-1"> Full Name </label>
          <input
            className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
            type="text"
            placeholder="Type your name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            required
          />
        </div>


        {/*    For Email */}
        <div className="mb-4">
          <label className="block mb-1"> Email </label>
          <input
            className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
            type="text"
            placeholder="Drop Your email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="my-2 px-4 py-2 text-center w-full inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
        >
          let's go
        </button>

        <hr className="mt-4" />

        <p className="text-center mt-5">
          Recieve Our NewsLetters Already ?
          <Link href="/" className="text-blue-500">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default NewsLetter;
