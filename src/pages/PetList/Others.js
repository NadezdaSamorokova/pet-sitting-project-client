import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SortButtons from "./SortButtons";

// React component for displaying a list of pets categorized as "others"
function Others () {
  // State variable to store the list of other pets
    const [others, setOthers] = useState([]);
    // Log the current list of other pets for debugging purposes
    console.log("ALLLL OTHERS", others);

  // API URL from environment variables
  const API_URL = process.env.REACT_APP_API_URL

  // useEffect hook to fetch the list of other pets from the server on component mount
  useEffect(() => {
    // Fetch the list of other pets from the server
    axios.get(`${API_URL}/pets/others`)
    .then(response => {
      // Update the state with the received data
        setOthers(response.data.petsFromDB)
        // Log it for debugging purposes
        console.log("OTHER PETS", response.data.petsFromDB)
    })
  }, [])
  // If the list of other pets is empty, display a loading message
  if(!others) return <p>Loading ...</p>

  // Render the component with a list of other pets
    return (
            <div className="List">
            <SortButtons/> 
              <div className="list-container">
                {others.map((other) => (
                <Link className="card-link" to={`/pet-list/${other._id}`}>
                  <div key={other._id} className="list-card"> 
                    <img className="listImage" src={other.image} alt ="petsPicture"/>
                    <p className="listName"><b>Name:</b> {other.name}</p>
                    <p className="petDates"><b>Availability dates:</b><br/>{other.dates}</p>
                  </div>
                </Link>
                ))}
              </div>
            </div>
    )
}

export default Others;