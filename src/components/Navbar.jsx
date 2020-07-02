import React from "react";

//thoughts====
//img src link from state
const Navbar = ({ username }) => {
  return (
    <div className="navbar">
      <div className="profile">
        <div className="profile-pic">
          <img src="https://picsum.photos/100" alt="profile pic" />
        </div>

        <h4>{username}</h4>
        <span></span>
      </div>
      <h4>Add recipe</h4>
      <h4>Categories</h4>
      <h4>Weekly Plan</h4>
      <h4>Settings</h4>
      <div className="sign-out">
        <i className="fas fa-sign-out-alt"></i>
        <h4>Signout</h4>
      </div>
    </div>
  );
};
export default Navbar;
