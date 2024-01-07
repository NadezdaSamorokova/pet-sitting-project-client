import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';

// React component for the Navigation bar
function Navbar () {

  // Access authentication state and functions from AuthContext using useContext
  const { isLoggedIn, logOutUser } = useContext(AuthContext);

  // Render the Navigation bar based on user authentication status
    return (
        <nav className="navgation">
          <div className="nav-section">
            <Link className="logo-link" to="/"><img className="logo" src={logo} alt="home"></img></Link>
            <div className="find-links">
              <Link className="find-link" to="/sitter-list"><button className="find-button">Find a sitter</button></Link>
              <Link className="find-link" to="/pet-list"><button className="find-button">Find a pet</button></Link>
            </div>
          </div>
            
          {!isLoggedIn && <div className="log-links">
              <Link className="log-link" to="/login"><button className="log-button">Log in</button></Link> 
              <Link className="log-link" to="/signup"><button className="log-button sign-button">Join now</button></Link>
            </div> }

            {isLoggedIn && <div className="log-links">
              <Link className="log-link" to="/profile"><button className="log-button">My Profile</button></Link>
              <Link className="log-link" onClick={logOutUser} to="/"><button className="log-button sign-button">Log out</button></Link> 
            </div>}
        </nav>
    )
}

export default Navbar;