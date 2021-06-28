import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  if(sessionUser && isLoaded){


  return (
    <div className="nav-bar">
      <div className="nav-link">
        <NavLink exact to="/">
          Home
        </NavLink>
      </div>
      <div className="nav-link">
        <NavLink to="/upload">Song Upload</NavLink>
      </div>
      <div className="nav-link">
        <NavLink to="/song">Songs</NavLink>
      </div>
      <div className="nav-link">
        <ProfileButton className="profile-button" user={sessionUser}/>

      </div>
    </div>
  );
}else{
  return (
    <div className="nav-bar">
      <div className="nav-link">
        <NavLink exact to="/">
          Home
        </NavLink>
      </div>
      <div className="nav-link">
        <NavLink to="/login">Log In</NavLink>
      </div>
      <div className="nav-link">
        <NavLink to="/signup">Sign Up</NavLink>
      </div>
    </div>
  );
 }
};

export default Navigation;
