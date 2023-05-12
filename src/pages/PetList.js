import Corgi from "../images/PetList/Corgi.png"
import Cat from "../images/PetList/Cat.png"
import Mouse from "../images/PetList/Mouse.png"

function PetList () {
    return (
        <div className="PetList">
          <div className="petList-sort">
            <button className="button-all">All</button>
            <button className="button-filter">
              <img className="filter-image" src={Corgi} alt="Corgi"/>
              <p className="filter-text">Dogs</p>
            </button>
            <button className="button-filter">
              <img className="filter-image" src={Cat} alt="Cat"/>
              <p className="filter-text">Cats</p>
            </button>
            <button className="button-filter">
              <img className="filter-image" src={Mouse} alt="Mouse"/>
              <p className="filter-text">Other</p>
            </button>
          </div>

          <div className="pets">
            <div>
                <img/>
                <p></p>
            </div>
          </div>
        </div>
    )
}

export default PetList;