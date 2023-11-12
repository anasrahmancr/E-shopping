import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <div>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/home" element={<Home/>} />
        </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
