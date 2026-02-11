import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Blog from "./pages/Blog"
import NewRelease from "./pages/NewRelease"

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/newrelease" element={<NewRelease />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
