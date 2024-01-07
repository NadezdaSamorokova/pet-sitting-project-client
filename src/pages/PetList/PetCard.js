import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Review from "../Review";

// React component for displaying details of a single pet
function PetCard () {
  // State variable to store the details of the pet
  const [pet, setPet] = useState(null);
  // Get the petId from the URL parameters using useParams
  const petId = useParams().id;
  // Log the current pet details for debugging purposes
  console.log("SINGLE PEEEET", pet);

  // API URL from environment variables
  const API_URL = process.env.REACT_APP_API_URL

  // Function to fetch details of the pet from the server
  const getPet = () => {
    axios.get(`${API_URL}/pets/pets/${petId}`)
    .then(response => {
      // Update the state with the received pet data
      setPet(response.data.petFromDB)
      // Log it for the debugging purposses
      console.log("SINGLE PET DB", response.data.petFromDB)
    })
  }

  // useEffect hook to fetch pet details on component mount
  useEffect(() => {
    getPet();
  }, [])

  // Render the component with details of the pet and a review section
return (
        <div className="Card">
          <div className="pet-section">
            <div className="name-section">
              <h1 className="card-name">{pet?.name}</h1>
              <img className="card-image" src={pet?.image} alt="image"/>
            </div>
            
            <div className="description-section">
              <p className="card-text"><b>Species:</b> {pet?.species}</p>
              <p className="card-text"><b>Size:</b> {pet?.size}</p>
              <p className="card-text"><b>Age:</b> {pet?.age}</p>
              <p className="card-text"><b>Description:</b> {pet?.description}<br/>
              The Cable News Network is a multinational news channel and website headquartered in Atlanta, Georgia, U.S. Founded in 1980 by American media proprietor Ted Turner and Reese Schonfeld as a 24-hour cable</p>
            
              <Link className="card-link" to="/pet-list/pet-card/email"><button className="contact-button" type="submit">Apply as a sitter</button></Link>
            </div>  
          </div>
          
          <Review pet={pet} getPet={getPet}/>   

        </div>
    )
}

export default PetCard;