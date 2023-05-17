import { AuthContext } from "../../context/auth.context"
import { useContext, useState } from "react";
import axios from "axios";

function EditProfilePage () {
    const {user} = useContext(AuthContext);

    const [username, setUsername] = useState(user?.username || ''); // Initialer Wert auf leeren String setzen
  
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    console.log("THIS IS USERNAME", username)
    console.log("this is the id", user._id)
  
    const handleSaveUsername = (e) => {
    
        console.log("is it calling this function?", {username})
      //const token = localStorage.getItem("authToken");
      axios.put(`http://localhost:5005/auth/users/${user._id}` , {username} )
        .then(response => {
            console.log("this is working")
          
        })
        .catch(error => {
        });
    };

    return (
        <div className="ProfilePage">
          <div className="edit-profile">
            <h1 className="profile-title">Your Profile</h1>
          </div>
          <div className="user-info">
            <form className="info">
            <fieldset>
               <input className="info-text" type="text" name="username" placeholder="Username" onChange={handleUsernameChange}/>
               <button type="submit" className="save" onClick={handleSaveUsername}>Send</button>
            </fieldset>
            <fieldset>
               <input className="info-text" type="email" name="email" placeholder="Email"/>
               <button className="save"></button>
            </fieldset>
                <p className="info-text"><b className="text-bold">Role:</b> {user?.role}</p>
            </form>
            <img className="profile-picture" src={user?.image} als="picture"/>
          </div>
            
        </div>
    )
}

export default EditProfilePage;