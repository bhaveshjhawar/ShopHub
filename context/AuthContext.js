"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
const { createContext, useState } = require("react");

const AuthContext = createContext("");

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // const [error,setError]=useState(null)

  const router = useRouter();

 

  const registerUser = async ({ name, email, password }) => {
    try {
      const { data } = await axios.post(
        `${process.env.API_URL}/api/auth/register`,
        {
          name,
          email,
          password,
        }
        // axiosConfig
      );
      if (data?.user) {
        router.push("/");
      }
    } catch (error) {
      // setError(error?.response?.data?.message);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        registerUser,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

// ******************
