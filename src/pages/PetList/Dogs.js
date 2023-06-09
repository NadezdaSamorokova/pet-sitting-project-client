import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SortButtons from "./SortButtons";

function Dogs () {
  const [dogs, setDogs] = useState([]);
  console.log('doooooooooooooogs',dogs);

  const API_URL = process.env.REACT_APP_API_URL

  useEffect(() => {
    axios.get(`${API_URL}/pets/dogs`)
    .then(response => {
      setDogs(response.data.petsFromDB)
      console.log("fjerbvkejrgv", response.data.petsFromDB)
    })
  }, [])
  if(!dogs) return <p>Loading ...</p>

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