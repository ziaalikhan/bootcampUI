import React from "react";
import "./Sidebar.css";
import Logo from "../../images/logo.png";
import MyImage from "../../images/my.jpg";
import SideBarNavigations from "./SideBarNavigations";

const Sidebar = () => {
  return (
    <div>
      <div className="logo_Container">
        <img src={Logo} />
        {/* Profile Card */}
        <div className="profile_Card">
          {/* profile Background */}
          <div className="profile_background_Image">
            <div className="profile_Image">
              <img src={MyImage} alt="Avatar" className="avatar" />
            </div>
          </div>
          {/* Profile Name */}
          <div className="profile_Name">
            <h1>User Name</h1>
          </div>
          {/* Profile Country */}
          <div className="profile_Country">
            <p>
              Usa, <span>Los Angelos</span>
            </p>
          </div>
          {/* Profile Posts */}
          <div className="profile_Posts">
            <p>50K Posts</p>
            <p>50K Posts</p>
            <p>50K Posts</p>
          </div>

          {/* Profile Ideas */}
          <div className="profile_Ideas">
            <p>50 Ideas</p>
            <p>50 Introductions</p>
            <p>50 Influencers</p>
          </div>
        </div>
        {/* SideBar Navigations */}
        <div className="SideBarNavigations">
          <SideBarNavigations />
        </div>
        {/*  */}
        <div className="darkMode_Switch">
          <p>hello</p>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
          <p>hello</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
