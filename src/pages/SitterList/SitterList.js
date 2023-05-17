import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function SitterList () {
  const [sitters, setSitters] = useState([]);

  console.log("SSSSFRSHDTHEDTH", sitters)

  useEffect(() => {
    axios.get('http://localhost:5005/auth/sitters')
    .then(response => {
    console.log("DDDDDDDDDD", response.data.usersFromDB)
      setSitters(response.data.usersFromDB)
    })
  }, [])


    return (
        <div className="List">
        <h1 className="sitters-title">Let's find your perfect pet sitter</h1>
          <div className="list-container">
            {sitters.map((sitter) => (
              <Link className="card-link" to="/sitter-list/sitter-card"> 
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