import { useState, useEffect } from "react";

function PetCard ({ petId }) {
 /* const [pet, setPet] = useState(null);

  useEffect(() => {
    fetch(`/pets/${petId}`)
      .then(response => response.json())
      .then(data => {
        setPet(data.petsFromDB);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, [petId]);*/

return (
        <div>
      <h1>Name</h1>
      <p>Description</p>
    </div>
    )
}

export default PetCard;