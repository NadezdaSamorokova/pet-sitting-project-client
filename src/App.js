import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import IsAnon from "./components/IsAnon";
import SitterList from './pages/SitterList';
import PetList from './pages/PetList/PetList';
import Dogs from './pages/PetList/Dogs';
import Cats from './pages/PetList/Cats';
import Others from './pages/PetList/Others';
import PetCard from './pages/PetList/PetCard'

import Navbar from './pages/Navbar';

import IsPrivat from "./components/IsPrivate";
import ProfilePage from './pages/ProfilePage';

function App() {
 // const location = useLocation();

  // Check if the current route is not "/pet-list"
 // const isPetListHidden = location.pathname !== "/pet-list";

  return (
    <div className="App">

      {<Navbar/>} 
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/sitter-list" element={<SitterList />} />

      {/* making sure, that the pet-list route not displaying along with the dogs, cats, or others */}
        {/*isPetListHidden ? null : ( <Route path="/pet-list" element={<PetList />} />  )*/}
        <Route path="/pet-list" element={<PetList />} />

        <Route path="/pet-list/dogs" element={<Dogs />} />
        <Route path="/pet-list/cats" element={<Cats />} />
        <Route path="/pet-list/others" element={<Others />} />
        <Route path="/pet-list/pet-card" element={ <IsPrivat> <PetCard /> </IsPrivat>} />
       
        <Route path="/signup" element={<IsAnon> <Signup /> </IsAnon>} />
        <Route path="/login" element={<IsAnon> <Login /> </IsAnon>} />

        <Route path="/profile" element={<IsPrivat> <ProfilePage /> </IsPrivat>} />

      </Routes>
    </div>
  );
}

export default App;
