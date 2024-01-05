import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SortButtons from "./SortButtons";

// React component for displaying a list of dogs
function Dogs () {
  // State variable to store the list of dogs
  const [dogs, setDogs] = useState([]);
  // Log the current list of dogs for debugging purposes
  console.log('ALLLLDOOOGS',dogs);

  // API URL from environment variables
  const API_URL = process.env.REACT_APP_API_URL

  // useEffect hook to fetch the list of dogs from the server on component mount
  useEffect(() => {
    // Fetch the list of dogs from the server
    axios.get(`${API_URL}/pets/dogs`)
    .then(response => {
      // Update the state with the received data
      setDogs(response.data.petsFromDB)
      // Log it for debugging purposes
      console.log("SEEETDOOOGS", response.data.petsFromDB)
    })
  }, [])
  // If the list of dogs is empty, display a loading message
  if(!dogs) return <p>Loading ...</p>

  // Render the component with a list of dogs
    return (
            <div className="List">
            <SortButtons/> 
              <div className="list-container">
                {dogs.map((dog) => (
                <Link className="card-link" to={`/pet-list/${dog._id}`}>
                  <div key={dog._id} className="list-card"> 
                    <img className="listImage" src={dog.image} alt ="petsPicture"/>
                    <p className="listName"><b>Name:</b> {dog.name}</p>
                    <p className="petDates"><b>Availability dates:</b><br/>{dog.dates}</p>
                  </div>
                </Link>
                ))}
              </div>
            </div>
    )
}

export default Dogs;