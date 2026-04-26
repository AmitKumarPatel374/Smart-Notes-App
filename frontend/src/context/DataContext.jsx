import React, { createContext, useState } from "react"
import apiInstance from "../api/apiInstance"

const userContext = createContext(null)
const DataContext = (props) => {
  const  [token, setToken ] = useState(false)
  const  [authLoading, setAuthLoading ] = useState(true)

  const checkAuth=async()=>{
     try {
       setAuthLoading(true);
       const response = await apiInstance.get("/user/profile");
       if (response && response.data) {
        setToken(true);
       }
     } catch (error) {
      setToken(false);
     }finally{
      setAuthLoading(false);
     }
  }
  return <userContext.Provider value={{ token,authLoading }}>{props.children}</userContext.Provider>
}

export default DataContext
