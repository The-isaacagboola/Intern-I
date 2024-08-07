import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import Details from "./Pages/Details";
import Footer from "./Components/Footer";
import { GlobalContext } from "./context/context";

function App() {
  return (
    <GlobalContext>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/recipe" element={<Details />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </GlobalContext>
  );
}

export default App;
