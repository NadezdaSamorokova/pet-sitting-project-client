import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

// React component for displaying details of a sitter
function SitterCard () {
  // State variable to store the details of the sitter
  const [user, setUser] = useState(null);
  // Extract the userId from the URL parameters using useParams
  const singleUser = useParams().userId
  // Log it fot the debugging purposes
  console.log("NEW CHECK USER", singleUser)
  // API URL from environment variables
  const API_URL = process.env.REACT_APP_API_URL

  // Function to fetch details of the sitter from the server
  const getSitter = () => {
    axios.get(`${API_URL}/auth/users/${singleUser}`)
    .then(response => {
      // Update the state with the received sitter data
      setUser(response.data.userFromDB)
      console.log("SINGLE SITTER", response.data.userFromDB)
    })
  }

  // useEffect hook to fetch sitter details on component mount
  useEffect(() => {
    getSitter();
  }, [])

    // Render the component with details of the single sitter
    return (
        <div className="Card">
          <div className="pet-section">
            <div className="name-section">
              <h1 className="card-name">{user?.username}</h1>
              <img className="card-image" src={user?.image} alt="image"/>
            </div>
          
            <div className="description-section">
              <p className="card-text description"><b>About:</b> {user?.about}<br/>
              The Cable News Network is a multinational news channel and website headquartered in Atlanta, Georgia, U.S. Founded in 1980 by American media proprietor Ted Turner and Reese Schonfeld as a 24-hour cable</p>
            
              <Link className="card-link" to="/pet-list/pet-card/email"><button className="contact-button" type="submit">Ask to sit</button></Link>
            </div>  
          </div>
        </div>
    )
}

export default SitterCard;