import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// React component for displaying a list of pet sitters
function SitterList () {
  // State variable to store the list of pet sitters
  const [sitters, setSitters] = useState([]);
  // Log the current list of pet sitters for debugging purposes
  console.log("AAALLL SITTERRS", sitters)

  // API URL from environment variables
  const API_URL = process.env.REACT_APP_API_URL

  // useEffect hook to fetch the list of pet sitters from the server on component mount
  useEffect(() => {
    // Fetch the list of pet sitters from the server
    axios.get(`${API_URL}/auth/sitters`)
    .then(response => {
      // Update the state with the received data
      setSitters(response.data.usersFromDB)
      // Log it for the debugging purposes
      console.log("SITTERS FROM DB", response.data.usersFromDB)
    })
  }, [])

    // Render the component with a list of pet sitters
    return (
        <div className="List">
          <h1 className="sitters-title">Let's find your perfect pet sitter</h1>
          <div className="list-container">
            {sitters.map((sitter) => (
              <Link className="card-link" to={`/sitter-list/${sitter._id}`}> 
               <div key={sitter._id} className="list-card"> 
                  <img className="listImage" src={sitter.image} alt ="Sitter Picture"/>
                  <p className="listName"><b>Name:</b> {sitter.username}</p>
                  <div className="like-buttons">
                    <button className="like-button" type="button"></button>
                    <button className="like-button" type="button"></button>
                    <button className="like-button" type="button"></button>
                    <button className="like-button" type="button"></button>
                    <button className="like-button" type="button"></button>
                  </div>
               </div>
              </Link>
            ))}
          </div>
        </div>
    )
}

export default SitterList;