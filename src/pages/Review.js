import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Review (props) {
  const [username, setUsername] = useState("");
  const [review, setReview] = useState("");
  const petId = useParams().id

  const handleReview = (e) => setReview(e.target.value);
  const handleUsername = (e) => setUsername(e.target.value);

  console.log("PRRRRROPS", props)

  const API_URL = process.env.REACT_APP_SERVER_URL

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    axios.post(`${API_URL}/pets/pets/${petId}/reviews`, { username, review })
      .then((response) => {
        // Redirect logic if needed
        // Example: history.push(`/wines/${response.data.winename}`);
        props.getPet();
        setUsername('');
        setReview('');
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  };
  

    return (
        <div className="Review">
          <div className="review-post">
           <h2>Reviews</h2>
           {props.pet?.reviews.map((reviewData) => (
            <div className="review-section" key={reviewData._id}>
              <h4>{reviewData?.username}</h4>
              <p className="review-text">{reviewData?.review}</p>
              <hr />
            </div>
           ))}
          </div>

          <div className="reviewForm-section">
            <h2 className="reviewForm-title">Write a review</h2>
            <form className="reviewForm" onSubmit={handleReviewSubmit}>
              <input className="reviewForm-input" type="text" name="username" value={username} placeholder="Name" onChange={handleUsername} required/>
              <textarea className="reviewForm-input" name="review" value={review} placeholder="Your review" required cols="30" rows="10" onChange={handleReview}></textarea>
              <button className="reviewForm-button" type="submit">Leave review</button>
            </form>
          </div>
        </div>
    )
}

export default Review;