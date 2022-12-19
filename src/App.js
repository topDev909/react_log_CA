import Home from "./page/Home";
import Login from "./page/Login";
import Signup from "./page/Signup";
import { useMediaQuery } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  const desktop = useMediaQuery("(min-width: 1024px)");
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
