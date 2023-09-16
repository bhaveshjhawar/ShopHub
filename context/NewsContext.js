"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
const { createContext } = require("react");

// using the create context from react to make a context api assigning it to newsContext const
const NewsContext = createContext("");

// Making a provider function naming it newsProvider

export const NewsProvider = ({ children }) => {
  const [newsuser, setNewsUser] = useState(null);
  // Using router to push to another routes
  const router = useRouter();

  const newsRegister = async ({ name, email }) => {
    try {
      // targeting the api route at the api -> auth -> newsRegister passing a post request there
      const { data } = await axios.post(
        `${process.env.API_URL}/api/auth/newsregister`,
        {
          name,
          email,
        }
      );
      if (data?.newsuser) {
        router.push("/");
      }
    } catch (error) {
      setError(error?.response?.data?.message);
    }
  };

  return (
    <NewsContext.Provider
      value={{
        newsRegister,
        newsuser,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export default NewsContext;
