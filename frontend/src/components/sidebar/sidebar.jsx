import React from "react";
import home from "../../imgs/home.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import logout from '../../imgs/logout.png'
import search from "../../imgs/search.png"
import explore from "../../imgs/explore.png"
import message from "../../imgs/messages.png"
import profile from '../../imgs/profile.png'
export default function Sidebar() {
  const { setIsLoggedIn } = useContext(AuthContext);
  const handleLogout = () => {
    window.localStorage.clear();
    setIsLoggedIn(false);
  };
  return (
    <>
      <div className="sidenav-top">
        <h1>Instagram</h1>
      </div>
      <div className="sidenav-mid">
        <Link>
          <div className="sidenav-icon">
            <img src={home} alt="" />
            <h2>Home</h2>
          </div>
        </Link>
        <Link>
          <div className="sidenav-icon">
            <img src={search} alt="" />
            <h2>Search</h2>
          </div>
        </Link>
        <Link>
          <div className="sidenav-icon">
            <img src={explore} alt="" />
            <h2>Explore</h2>
          </div>
        </Link>
        <Link>
          <div className="sidenav-icon">
            <img src={message} alt="" />
            <h2>Message</h2>
          </div>
        </Link>
        <Link>
          <div className="sidenav-icon">
            <img src={profile} alt="" />
            <h2>Profile</h2>
          </div>
        </Link>
      </div>
      <div className="sidenav-bottom">
        <div className="sidenav-icon">
          <img src={logout} alt="" />
          <button id="logout-btn" onClick={handleLogout}><h2>Logout</h2></button>
        </div>
      </div>
    </>
  );
}
