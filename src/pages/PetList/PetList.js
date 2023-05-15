import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SortButtons from "./SortButtons";

function PetList () {
  const [pets, setPets] = useState([]);

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
        <SortButtons/> 
          <div className="pets">
            {pets.map((pet) => (
          <Link className="card-link" to="/pet-list/pet-card">
            <div key={pet._id} className="pet"> 
                <img className="petImage" src={pet.image} alt ="petsPicture"/>
                <p className="petName"><b>Name:</b> {pet.name}</p>
                <p className="petDates"><b>Availability dates:</b><br/>{pet.dates}</p>
              </div>
          </Link>
            ))}
          </div>
      
      </div>
    )
}

export default PetList;