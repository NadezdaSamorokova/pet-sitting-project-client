import { AuthContext } from "../../context/auth.context"
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

function ProfilePage () {
  const {user} = useContext(AuthContext);

  


    return (
        <div className="ProfilePage">
          <div className="edit-profile">
            <h1 className="profile-title">Your Profile</h1>
            <Link className="card-link" to={`/profile/${user._id}`}><button className="edit-button" type="button"></button></Link>
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