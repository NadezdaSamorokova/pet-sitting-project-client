import { useEffect, useState } from "react";
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
        <div className="PetList">
        <h1>Let's find your perfect pet sitter</h1>
          <div className="pets">
            {sitters.map((sitter) => (
          
            <div key={sitter._id} className="pet"> 
                <img className="petImage" src={sitter.image} alt ="petsPicture"/>
                <p className="petName"><b>Name:</b> {sitter.username}</p>
              </div>
            ))}
          </div>
      
      </div>
    )
}

export default SitterList;