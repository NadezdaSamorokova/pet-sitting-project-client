import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SortButtons from "./SortButtons";

function Others () {
    const [others, setOthers] = useState([]);
  console.log(others);

  const API_URL = process.env.REACT_APP_API_URL

  useEffect(() => {
    axios.get(`${API_URL}/pets/others`)
    .then(response => {
        setOthers(response.data.petsFromDB)
      console.log(response.data.petsFromDB)
    })
  }, [])
  if(!others) return <p>Loading ...</p>

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