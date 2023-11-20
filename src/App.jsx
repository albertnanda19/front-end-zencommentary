import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CommentInput from "./pages/CommentInput";
import About from "./pages/About";
import OurTeam from "./pages/OurTeam";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comment-input" element={<CommentInput />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-team" element={<OurTeam />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
