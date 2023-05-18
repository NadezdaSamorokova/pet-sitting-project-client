import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function SitterCard () {
  const [user, setUser] = useState(null);
  const singleUser = useParams().userId
  console.log("NEW CHECK USER", singleUser)

  const API_URL = process.env.REACT_APP_SERVER_URL

  /*useEffect(() => {
    axios.get(`http://localhost:5005/pets/pets/${petId}`)
    .then(response => {
      setPet(response.data.petFromDB)
      console.log("DDDDDDDD", response.data.petFromDB)
    })
  }, [])*/

  const getSitter = () => {
    axios.get(`${API_URL}/auth/users/${singleUser}`)
    .then(response => {
      setUser(response.data.userFromDB)
      console.log("DDDDDDDD", response.data.userFromDB)
    })
  }

  useEffect(() => {
    getSitter();
  }, [])



    return (
        <div className="Card">
        <div className="pet-section">
          <div className="name-section">
            <h1 className="card-name">{user?.username}</h1>
            <img className="card-image" src={user?.image} alt="image"/>
          </div>
          
          <div className="description-section">
            {/*<p className="card-text"><b>Species:</b> {pet?.species}</p>
            <p className="card-text"><b>Size:</b> {pet?.size}</p>
            <p className="card-text"><b>Age:</b> {pet?.age}</p>*/}
            <p className="card-text description"><b>About:</b> {user?.about}<br/>
            The Cable News Network is a multinational news channel and website headquartered in Atlanta, Georgia, U.S. Founded in 1980 by American media proprietor Ted Turner and Reese Schonfeld as a 24-hour cable</p>
            
            <Link className="card-link" to="/pet-list/pet-card/email"><button className="contact-button" type="submit">Ask to sit</button></Link>
          </div>  
         </div>

        </div>
    )
}

export default SitterCard;