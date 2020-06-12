import React from "react";
import logo from "../../images/logo.svg";
import search from "../../images/search.svg";
import userLogo from "../../images/user-logo.svg";
import moreIcon from "../../images/icon-more.svg";
import notification from "../../images/notifications.svg";
import logOut from "../../images/log-out.svg";

export default function Search(props) {
  return (
    <div>
      <div className="rectangle">
        <img src={logo} alt={logo} className="logo" />
      </div>
      <div className="main-topbar">
        <div className="search">
          <img src={search} alt="search" className="icon-search" />
          <input type="text" className="input" placeholder="Search..." />
        </div>
        <div className="user-details">
          <p className="user-name">{props.name}</p>
          <p className="user-role">{props.role}</p>
        </div>
        <div className="topbar-functions">
          <img src={userLogo} alt="userLogo" />
          <img src={moreIcon} alt="moreIcon" />
          <div className="divider-topbar"></div>
          <img src={notification} alt="notification" />
          <img src={logOut} alt="logOut" />
        </div>
      </div>
    </div>
  );
}
