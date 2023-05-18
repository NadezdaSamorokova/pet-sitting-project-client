import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ProfilePage () {
  const [user, setUser] = useState();

  const API_URL = process.env.REACT_APP_API_URL

  useEffect (() => {
    const storedToken = localStorage.getItem("authToken");
    console.log("this is the token", storedToken)
    axios.get(`${API_URL}/auth/profile`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        const oneUser = response.data;
        setUser(oneUser);

        console.log("USER AGAIN", oneUser)
      })
      .catch((err) => console.log(err));
  }, [])

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