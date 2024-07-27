import "./App.css";
import Home from "./Pages/Home";
import Aos from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import News from "./Pages/News";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";

function App() {
  Aos.init({
    offset: 200,
    duration: 600,
    easing: "ease-in-sine",
    delay: 100,
  });

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/News" element={<News />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
