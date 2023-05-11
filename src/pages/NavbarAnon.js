import { Link } from "react-router-dom";
import home from "../images/home.png"

function NavbarAnon () {
    return (
        <nav className="navgation">
          <div className="nav-section">
            <Link className="link" to="/"><img className="logo" src={home} alt="home"></img></Link>
            <div className="find-links">
              <Link className="link" to="/sitter-list"><button className="find-link">Find a sitter</button></Link>
              <Link className="link" to="/pet-list"><button className="find-link">Find a pet</button></Link>
            </div>
          </div>
            
            <div className="log-links">
              <Link className="link" to="/login"><button className="log-link">Log in</button></Link>
              <Link className="link" to="/signup"><button className="sing-link">Join now</button></Link>
            </div>
        </nav>
    )
}

export default NavbarAnon;