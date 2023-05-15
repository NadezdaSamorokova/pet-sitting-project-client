import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SortButtons from "./SortButtons";

function Cats () {
  const [cats, setCats] = useState([]);

  console.log('CAAATSSSSS',cats)

  useEffect(() => {
    axios.get('http://localhost:5005/pets/cats')
    .then(response => {
        setCats(response.data.petsFromDB)
      console.log("CAATTTSS FROM DDDBB", response.data.petsFromDB)
    })
  }, [])
  if(!cats) return <p>Loading ...</p>

    return (
            <div className="PetList">
            <SortButtons/> 
              <div className="pets">
                {cats.map((cat) => (
                <Link className="card-link" to="/pet-list/pet-card">
                  <div key={cat._id} className="pet"> 
                    <img className="petImage" src={cat.image} alt ="petsPicture"/>
                    <p className="petName"><b>Name:</b> {cat.name}</p>
                    <p className="petDates"><b>Availability dates:</b><br/>{cat.dates}</p>
                  </div>
                </Link>
                ))}
              </div>
          </div>
    )
}

export default Cats;