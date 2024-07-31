import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import Nav from './Components/Nav'
import Home from "./Pages/Home"
import Details from "./Pages/Details"

function App() {


  return (
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/recipe/:id" element={<Details />} />
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
