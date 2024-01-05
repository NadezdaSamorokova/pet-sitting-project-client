import Corgi from "../../images/PetList/Corgi.png"
import Cat from "../../images/PetList/Cat.png"
import Mouse from "../../images/PetList/Mouse.png"
import { Link } from "react-router-dom";

// React component for displaying sort buttons
function SortButtons () {
  // Render the component
    return (
        <div className="petList-sort">
          <Link className="card-link" to="/pet-list"><button className="button-all">All</button></Link>
          <Link className="card-link" to="/pet-list/dogs">
            <button className="button-filter">
              <img className="filter-image" src={Corgi} alt="Corgi"/>
              <p className="filter-text">Dogs</p>
            </button>
          </Link>
          <Link className="card-link" to="/pet-list/cats">
            <button className="button-filter">
              <img className="filter-image" src={Cat} alt="Cat"/>
              <p className="filter-text">Cats</p>
            </button>
          </Link>
          <Link className="card-link" to="/pet-list/others">
            <button className="button-filter">
              <img className="filter-image" src={Mouse} alt="Mouse"/>
              <p className="filter-text">Other</p>
            </button>
          </Link>
        </div>

    )
}

export default SortButtons;