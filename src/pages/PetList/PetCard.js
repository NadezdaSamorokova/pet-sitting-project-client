import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Review from "../Review";


function PetCard () {
  const [pet, setPet] = useState(null);
  const petId = useParams().id;
  console.log("GGGGGG", pet);

  const API_URL = process.env.REACT_APP_SERVER_URL

  /*useEffect(() => {
    axios.get(`http://localhost:5005/pets/pets/${petId}`)
    .then(response => {
      setPet(response.data.petFromDB)
      console.log("DDDDDDDD", response.data.petFromDB)
    })
  }, [])*/

  const getPet = () => {
    axios.get(`${API_URL}/pets/pets/${petId}`)
    .then(response => {
      setPet(response.data.petFromDB)
      console.log("DDDDDDDD", response.data.petFromDB)
    })
  }

  useEffect(() => {
    getPet();
  }, [])

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
            <p className="card-text description"><b>Description:</b> {pet?.description}<br/>
            The Cable News Network is a multinational news channel and website headquartered in Atlanta, Georgia, U.S. Founded in 1980 by American media proprietor Ted Turner and Reese Schonfeld as a 24-hour cable</p>
            
            <Link className="card-link" to="/pet-list/pet-card/email"><button className="contact-button" type="submit">Apply as a sitter</button></Link>
          </div>  
         </div>
          
          <Review pet={pet} getPet={getPet}/>   

        </div>
    )
}

export default PetCard;