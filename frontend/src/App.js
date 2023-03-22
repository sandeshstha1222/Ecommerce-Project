import "./App.css";
import Login from "./components/login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/signup/signup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home/Home";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <ToastContainer />
      </Router>
    </div>
  );
}

export default App;
