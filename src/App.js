import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import IsAnon from "./components/IsAnon";
import SitterList from './pages/SitterList/SitterList';
import SitterCard from './pages/SitterList/SitterCard';
import PetList from './pages/PetList/PetList';
import Dogs from './pages/PetList/Dogs';
import Cats from './pages/PetList/Cats';
import Others from './pages/PetList/Others';
import PetCard from './pages/PetList/PetCard'
import EmailPage from './pages/EmailPage'

import Navbar from './pages/Navbar';

import IsPrivat from "./components/IsPrivate";
import ProfilePage from './pages/ProfilePage/ProfilePage';
import EditProfilePage from './pages/ProfilePage/EditProfilePage';

function App() { 
  return (
    <div className="App">

      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/signup" element={<IsAnon> <Signup /> </IsAnon>} />
        <Route path="/login" element={<IsAnon> <Login /> </IsAnon>} />

        <Route path="/profile" element={<IsPrivat> <ProfilePage /> </IsPrivat>} />
          <Route path="/profile/:id" element={<IsPrivat> <EditProfilePage /> </IsPrivat>} />

        <Route path="/sitter-list" element={<SitterList />} />
          <Route path="/sitter-list/sitter-card" element={ <IsPrivat> <SitterCard /> </IsPrivat>} />
          <Route path="/sitter-list/sitter-card/email" element={ <IsPrivat> <EmailPage /> </IsPrivat>} />

        <Route path="/pet-list" element={<PetList />} />
          <Route path="/pet-list/dogs" element={<Dogs />} />
          <Route path="/pet-list/cats" element={<Cats />} />
          <Route path="/pet-list/others" element={<Others />} />
          <Route path="/pet-list/:id" element={ <IsPrivat> <PetCard /> </IsPrivat>} />
          <Route path="/pet-list/pet-card/email" element={ <IsPrivat> <EmailPage /> </IsPrivat>} />
      </Routes>
    </div>
  );
}

export default App;
