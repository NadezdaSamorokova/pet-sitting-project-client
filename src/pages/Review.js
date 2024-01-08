import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// React component for displaying and submitting reviews for a pet
function Review (props) {
  // State variables to store username and review
  const [username, setUsername] = useState("");
  const [review, setReview] = useState("");

  // Get the petId from the URL parameters using useParams
  const petId = useParams().id

  // Event handler for updating the review state
  const handleReview = (e) => setReview(e.target.value);
  // Event handler for updating the username state
  const handleUsername = (e) => setUsername(e.target.value);

  // Log the props for debugging purposes
  console.log("PRRRRROPS", props)

  // API URL from environment variables
  const API_URL = process.env.REACT_APP_API_URL

  // Event handler for submitting a new review
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    // Send a POST request to add a new review for the current pet
    axios.post(`${API_URL}/pets/pets/${petId}/reviews`, { username, review })
      .then((response) => {
        // On success, update the pet data, clear the input fields
        props.getPet();
        setUsername('');
        setReview('');
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  };
  
  // Render the component with review display and review submission form
    return (
        <div className="Review">
          <div className="review-post">
            <h2 className="review-title">Reviews</h2>
            {props.pet?.reviews.map((reviewData) => (
            <div className="review-section" key={reviewData._id}>
              <h4 className="review-name">{reviewData?.username}</h4>
              <p className="review-text">{reviewData?.review}</p>
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