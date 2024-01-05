import { AuthContext } from "../../context/auth.context"
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// React component for editing the user profile
function EditProfilePage () {
    // Access the user information from the authentication context
    const {user} = useContext(AuthContext);

    // API URL from environment variables
    const API_URL = process.env.REACT_APP_API_URL

    // State variable to store the edited username, initialized with the user's current username or an empty string
    const [username, setUsername] = useState(user?.username || ''); // Initialer Wert auf leeren String setzen
  
    // Event handler for updating the username state as it changes
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    // Log the current username and user ID for debugging purposes
    console.log("THIS IS USERNAME", username)
    console.log("THIS IS THE ID", user._id)
  
    // Event handler for saving the edited username
    const handleSaveUsername = (e) => {
        // Log the attempt to call the save username function
        console.log("is it calling this function?", {username})
      // const token = localStorage.getItem("authToken");
      // Send a PUT request to update the user's username
      axios.put(`${API_URL}/auth/users/${user._id}` , {username} )
        .then(response => {
            // Log success message
            console.log("this is working")
        })
        .catch(error => {
        });
    };

    // Render the component with the user's profile information and editing options
    return (
        <div className="ProfilePage">
          <div className="edit-profile">
            <h1 className="profile-title">Your Profile</h1>
          </div>
          <div className="user-info">
            <form className="info">
              <fieldset className="usernameEdit">
                 <input className="usernameEdit-input" type="text" name="username" placeholder="Username edit" onChange={handleUsernameChange}/>
                 <Link className="card-link" to="/profile"><button className="save-button" type="submit" onClick={handleSaveUsername}></button></Link>
              </fieldset>
              <p className="info-text"><b className="text-bold">E-Mail:</b> {user?.email}</p>
              <p className="info-text"><b className="text-bold">Role:</b> {user?.role}</p>
            </form>
            <img className="profile-picture" src={user?.image} als="picture"/>
          </div>   
        </div>
    )
}

export default EditProfilePage;