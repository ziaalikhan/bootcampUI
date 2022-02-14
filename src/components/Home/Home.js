import React from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Logo from "../../images/logo.png";

const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Home Page */}
      <div className="home_Page">
        <div className="content">
          <div className="home_banner">
            <div className="banner_Description">
              <div className="logo">
                <img src={Logo} />
                <div className="banner_Desc">
                  <h2 className="banner_Heading">Travel Logo</h2>
                  <p>Tragline Here</p>
                </div>
              </div>
              <div className="explore_Heading">
                <h1>
                  Explore The <span>WORLD</span>
                </h1>
              </div>
              <div className="banner_Text">
                  <p>Lorem Ipsum is simply dummy text of the <br />printing and typesetting industry.</p>
              </div>
              <div className="bookNow_Btn">
                  <button>Book Now</button>
              </div>
              <div className="contact_Us">
                <div>
                    <p className="visit_Our_website">Visit Our Website For More...</p>
                    <p>www.youtube.com</p>
                </div>
                <div>
                    <p className="contact_Query">Contact Us For Query</p>
                    <p>+00 45 66 789</p>                 
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>Hello world</div>
      </div>
    </div>
  );
};

export default Home;
