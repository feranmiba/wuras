"use client"
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Post from "./pages/post/Post";
import Works from "./pages/works/Works";
import MobileNav from "./component/Navbar/MobileNav";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/mobile" element={<MobileNav />} />
        <Route path="/about" element={<About />} />
        <Route path="/post" element={<Post />} />
        <Route path="/works" element={<Works />} />
      </Routes>
    </div>
  );
}

export default App;
