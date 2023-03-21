import './App.css';
import Login from './components/login/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Signup from "./components/signup/signup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/login" element={<Login />} />
        </Routes>
        <ToastContainer />
      </Router>
    </div>
  );

}

export default App;
