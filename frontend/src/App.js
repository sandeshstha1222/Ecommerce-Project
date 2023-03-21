import "./App.css";
import Signup from "./components/signup/signup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      <Signup />
      <ToastContainer />
    </div>
  );
}

export default App;
