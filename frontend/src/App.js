import './App.css';
import Login from './components/login/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/nav/Nav';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
