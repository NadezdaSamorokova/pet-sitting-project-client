import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SortButtons from "./SortButtons";

function Cats () {
  const [cats, setCats] = useState([]);
  console.log('CAAATSSSSS',cats);

  const API_URL = process.env.REACT_APP_SERVER_URL

  useEffect(() => {
    axios.get(`${API_URL}/pets/cats`)
    .then(response => {
        setCats(response.data.petsFromDB)
      console.log("CAATTTSS FROM DDDBB", response.data.petsFromDB)
    })
  }, [])
  if(!cats) return <p>Loading ...</p>

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