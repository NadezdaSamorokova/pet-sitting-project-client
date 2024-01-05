import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// React component for displaying user profile information
function ProfilePage () {
  // State variable to store the user information
  const [user, setUser] = useState();

  // API URL from environment variables
  const API_URL = process.env.REACT_APP_API_URL

  // useEffect hook to fetch user profile information from the server on component mount
  useEffect (() => {
    // Retrieve the authentication token from local storage
    const storedToken = localStorage.getItem("authToken");
    //Log it for the debugging purposes
    console.log("this is the token", storedToken)
    // Fetch user profile information using the authentication token
    axios.get(`${API_URL}/auth/profile`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        // Update the state with the received user data
        const oneUser = response.data;
        setUser(oneUser);
        // Log the user for the debugging purposes
        console.log("USER AGAIN", oneUser)
      })
      .catch((err) => console.log(err));
  }, [])

  // Render the component with the user's profile information and an option to edit the profile
    return (
        <div className="ProfilePage">
          <div className="edit-profile">
            <h1 className="profile-title">Your Profile</h1>
            <Link className="card-link" to={`/profile/${user?._id}`}><button className="edit-button" type="button"></button></Link>
          </div>
          <div className="user-info">
            <div className="info">
                <p className="info-text"><b className="text-bold">Your Name:</b> {user?.username}</p>
                <p className="info-text"><b className="text-bold">E-Mail:</b> {user?.email}</p>
                <p className="info-text"><b className="text-bold">Role:</b> {user?.role}</p>
            </div>
            <img className="profile-picture" src={user?.image} als="picture"/>
          </div>   
        </div>
    )
}

export default ProfilePage;