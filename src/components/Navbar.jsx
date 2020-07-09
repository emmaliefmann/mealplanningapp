import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ username, photo }) => {
  return (
    <div className="navbar">
      <div className="profile">
        <div className="profile-pic">
          <img src={`${photo}`} alt="profile pic" />
        </div>

        <h4>{username}</h4>
        <span></span>
      </div>
      <NavLink className="navlink" to="/addrecipe">
        Add recipe
      </NavLink>
      <NavLink className="navlink" to="/weeklyplan">
        Weekly Plan
      </NavLink>
      <NavLink className="navlink" to="/library">
        Library
      </NavLink>
      <h4 className="navlink">Settings</h4>
      <div className="sign-out">
        <i className="fas fa-sign-out-alt"></i>
        <h4>Signout</h4>
      </div>
    </div>
  );
};
export default Navbar;
