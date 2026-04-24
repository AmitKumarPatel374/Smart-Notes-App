import React, { createContext, useState } from "react"

const userContext = createContext(null)
const DataContext = (props) => {
  const { token, setToken } = useState(null)
  return <userContext.Provider value={{ token }}>{props.children}</userContext.Provider>
}

export default DataContext
