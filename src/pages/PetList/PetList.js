import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SortButtons from "./SortButtons";

// React component for displaying a list of pets
function PetList () {
  // State variable to store the list of pets
  const [pets, setPets] = useState([]);
  // Log the current list of pets for debugging purposes
  console.log(pets)

  // API URL from environment variables
  const API_URL = process.env.REACT_APP_API_URL

  // useEffect hook to fetch the list of pets from the server on component mount
  useEffect(() => {
    // Fetch the list of pets from the server
    axios.get(`${API_URL}/pets/pets`)
    .then(response => {
      // Update the state with the received data
      setPets(response.data.petsFromDB)
    })
  }, [])

  // Render the component with a list of pets
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