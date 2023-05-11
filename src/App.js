import './App.css';
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import IsAnon from "./components/IsAnon";
import HomePage from "./pages/HomePage";
import SitterList from './pages/SitterList';
import PetList from './pages/PetList';
import NavbarAnon from './pages/NavbarAnon';

function App() {
  return (
    <div className="App">
    <NavbarAnon/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sitter-list" element={<SitterList />} />
        <Route path="/pet-list" element={<PetList />} />

        <Route path="/signup" element={<IsAnon> <Signup /> </IsAnon>} />
        <Route path="/login" element={<IsAnon> <Login /> </IsAnon>} />

      </Routes>
    </div>
  );
}

export default App;
