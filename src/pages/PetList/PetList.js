import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SortButtons from "./SortButtons";

function PetList () {
  const [pets, setPets] = useState([]);
  console.log(pets)

  const API_URL = process.env.REACT_APP_SERVER_URL

  useEffect(() => {
    axios.get(`${API_URL}/pets/pets`)
    .then(response => {
      setPets(response.data.petsFromDB)
    })
  }, [])

    return (
        <div className="List">
        <SortButtons/> 
          <div className="list-container">
            {pets.map((pet) => (
          <Link className="card-link" to={`/pet-list/${pet._id}`}>
            <div key={pet._id} className="list-card"> 
                <img className="listImage" src={pet.image} alt ="petsPicture"/>
                <p className="listName"><b>Name:</b> {pet.name}</p>
                <p className="petDates"><b>Availability dates:</b><br/>{pet.dates}</p>
              </div>
          </Link>
            ))}
          </div>
      
      </div>
    )
}

export default PetList;