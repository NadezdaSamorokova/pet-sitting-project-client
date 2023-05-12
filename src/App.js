import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import IsAnon from "./components/IsAnon";
import SitterList from './pages/SitterList';
import PetList from './pages/PetList';
import Navbar from './pages/Navbar';

import IsPrivat from "./components/IsPrivate";
import ProfilePage from './pages/ProfilePage';

function App() {

  return (
    <div className="App">

      {<Navbar/>} 
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/sitter-list" element={<SitterList />} />
        <Route path="/pet-list" element={<PetList />} />

        <Route path="/signup" element={<IsAnon> <Signup /> </IsAnon>} />
        <Route path="/login" element={<IsAnon> <Login /> </IsAnon>} />

        <Route path="/profile" element={<IsPrivat> <ProfilePage /> </IsPrivat>} />

      </Routes>
    </div>
  );
}

export default App;
