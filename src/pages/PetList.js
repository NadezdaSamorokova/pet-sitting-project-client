import Corgi from "../images/PetList/Corgi.png"
import Cat from "../images/PetList/Cat.png"
import Mouse from "../images/PetList/Mouse.png"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function PetList () {
  const [pets, setPets] = useState([])

  console.log(pets)

  useEffect(() => {
    axios.get('http://localhost:5005/pets/pets')
    .then(response => {
      console.log(response.data.petsFromDB[0].image)
      setPets(response.data.petsFromDB)
    })
  }, [])

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

          <Link className="card-link" to="/pet-card">
          <div className="pets">
            {pets.map((pet) => (
              <div key={pet._id} className="pet"> 
                <img className="petImage" src={pet.image} alt ="petsPicture"/>
                <p className="petName"><b>Name:</b> {pet.name}</p>
                <p className="petDates"><b>Availability dates:</b><br/>{pet.dates}</p>
              </div>
            ))}
          </div>
          </Link>
      </div>
    )
}

export default PetList;