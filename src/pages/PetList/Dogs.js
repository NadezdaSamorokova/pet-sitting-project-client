import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SortButtons from "./SortButtons";

function Dogs () {
  const [dogs, setDogs] = useState([]);

  console.log('doooooooooooooogs',dogs)

  useEffect(() => {
    axios.get('http://localhost:5005/pets/dogs')
    .then(response => {
      setDogs(response.data.petsFromDB)
      console.log("fjerbvkejrgv", response.data.petsFromDB)
    })
  }, [])
  if(!dogs) return <p>Loading ...</p>

    return (
            <div className="PetList">
            <SortButtons/> 
              <div className="pets">
                {dogs.map((dog) => (
                <Link className="card-link" to="/pet-list/pet-card">
                  <div key={dog._id} className="pet"> 
                    <img className="petImage" src={dog.image} alt ="petsPicture"/>
                    <p className="petName"><b>Name:</b> {dog.name}</p>
                    <p className="petDates"><b>Availability dates:</b><br/>{dog.dates}</p>
                  </div>
                </Link>
                ))}
              </div>
          </div>
    )
}

export default Dogs;