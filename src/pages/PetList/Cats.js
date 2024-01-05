import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SortButtons from "./SortButtons";

// React component for displaying a list of cats
function Cats () {
  // State variable to store the list of cats
  const [cats, setCats] = useState([]);
  // Log the current list of cats for debugging purposes
  console.log('CAAATSSSSS',cats);

  // API URL from environment variables
  const API_URL = process.env.REACT_APP_API_URL

  // useEffect hook to fetch the list of cats from the server on component mount
  useEffect(() => {
    // Fetch the list of cats from the server
    axios.get(`${API_URL}/pets/cats`)
    .then(response => {
        setCats(response.data.petsFromDB)
        // Log for debugging purposes
        console.log("CAATTTSS FROM DDDBB", response.data.petsFromDB)
    })
  }, [])
  // If the list of cats is empty, display a loading message
  if(!cats) return <p>Loading ...</p>

  // Render the component with a list of cats
    return (
            <div className="List">
            <SortButtons/> 
              <div className="list-container">
                {cats.map((cat) => (
                <Link className="card-link" to={`/pet-list/${cat._id}`}>
                  <div key={cat._id} className="list-card"> 
                    <img className="listImage" src={cat.image} alt ="petsPicture"/>
                    <p className="listName"><b>Name:</b> {cat.name}</p>
                    <p className="petDates"><b>Availability dates:</b><br/>{cat.dates}</p>
                  </div>
                </Link>
                ))}
              </div>
            </div>
    )
}

export default Cats;