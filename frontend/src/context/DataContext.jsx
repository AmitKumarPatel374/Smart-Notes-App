import React, { createContext, useState } from "react"
import apiInstance from "../api/apiInstance"
import { useEffect } from "react"

export const userContext = createContext(null)
const DataContext = (props) => {
  const  [token, setToken ] = useState(false)
  const  [authLoading, setAuthLoading ] = useState(true)
  

  const checkAuth=async()=>{
     try {
       setAuthLoading(true);
       const response = await apiInstance.get("/user/profile");
       console.log(response);
       
       if (response && response.data) {
        setToken(true);
       }
     } catch (error) {
      setToken(false);
      console.log(error);
      
     }finally{
      setAuthLoading(false);
     }
  }

  useEffect(()=>{
    checkAuth();
  },[])
  return <userContext.Provider value={{ token,authLoading }}>{props.children}</userContext.Provider>
}

export default DataContext
