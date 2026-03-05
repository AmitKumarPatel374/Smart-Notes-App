import React from "react"
import RoutesConfig from "./routes/routes"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div>
      <Navbar />
        <RoutesConfig />
      <Footer />
    </div>
  )
}

export default App
