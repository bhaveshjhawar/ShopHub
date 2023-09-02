"use client"

import React,{useState} from "react";
import { useRouter } from "next/navigation";
import LoginIcon from '@mui/icons-material/Login';

const Search = () => {

  const [keyword,setKeyword]=useState()
  const router = useRouter()


  const submitHandler=()=>{
    if(keyword){
      router.push(`/?keyword=${keyword}`)
    }else{
      router.push("/")
    }
  }


  return (
    <form className="flex flex-wrap items-center w-50 order-last md:order-none mt-5 lg:ml-4 md:mt-0 md:w-1/4 lg:w-1/4">
      <input
        className="flex-grow appearance-none border w-20 text-black border-gray-200 bg-gray-100 rounded-md mr-2 py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400"
        type="text"
        placeholder="Dive into latest fashion"
        value={keyword}
        onChange={(e)=>setKeyword(e.target.value)}
        required
        // endIcon={<LoginIcon/>}
      />
      <button
        type="button"
        className="px-4 py-2 inline-block text-white border border-white  text-white rounded-md"
        onClick={submitHandler}
      >
        Search
      </button>
    </form>
  );
};

export default Search;