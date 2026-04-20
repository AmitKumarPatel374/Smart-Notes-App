import React from "react"
import RoutesConfig from "./routes/routes"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { ToastContainer } from "react-toastify"

const App = () => {
  return (
    <div>
      <Navbar />
        <RoutesConfig />
        <ToastContainer />
      <Footer />
    </div>
  )
}

export default App
