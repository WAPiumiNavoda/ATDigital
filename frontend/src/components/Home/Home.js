import React, { useState } from "react";
import "./Home.css";
import img1 from "../../Assets/image1.png";
import img2 from "../../Assets/image2.png";
import img3 from "../../Assets/blog.jpg";
import img4 from "../../Assets/product.jpg";

function ToggleItem() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`toggle-item ${isOpen ? "expanded" : "minimized"}`}>
      <button onClick={handleToggle} className="toggle-button">
        {isOpen ? "-" : "+"}
      </button>
      <div className="toggle-content">
        <p>Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?</p>
        {isOpen && (
          <p>
            Leo at sit eu libero. Vestibulum et mollis ligula, id vestibulum
            odio. Phasellus vitae turpis vitae purus dictum cursus. Nulla
            facilisi. Pellentesque id ligula eget elit sodales rutrum.
          </p>
        )}
      </div>
    </div>
  );
}

function Home() {
  return (
    <div>
      <div className="banner">
        <div className="banner-text">
          <div className="banner-text-content">
            <p >
              We Crush Your Competitors, Goals, And Sales Records - Without The
              B.S.
            </p>
          </div>
          <div className="banner-button-container">
            <button className="banner-button">Get free consultation</button>
          </div>
        </div>
      </div>

      <div className="services">
        <div className="service-container" style={{ paddingLeft: "20px" }}>
          <img src={img1} alt="Donate" className="service-image" />
          <div className="service-text">
            <a
              style={{ textDecoration: "none" }}
              href="/user-projectView"
              className="tab"
            >
              <h3 style={{ color: "#6B3CC9", paddingLeft: "0px" }}>
                {" "}
                Web & Mobile App Development
              </h3>
            </a>
            <p style={{ paddingLeft: "220px" }}>
              Your web and mobile Apps are pieces of the puzzle to grow your
              business. We use frameworks which tailor content and engagement
              methods to respond to different intents shown by your potential
              customers who interact with your business online.
            </p>
            <button style={{ marginLeft: "220px" }} className="orange-button">
              LEARN MORE
            </button>
          </div>
        </div>
        <div className="service-container">
          <div className="service-text">
            <a
              style={{ textDecoration: "none" }}
              href="/services"
              className="tab"
            >
              <h3 style={{ color: "#6B3CC9" }} className="pt-5">
                Digital Strategy Consulting
              </h3>
            </a>
            <p style={{ paddingRight: "-20px" }} className="px-5">
              Your digital strategy should complement the overall marketing
              strategy of the company. In online marketing, each component will
              never work in isolation and every business needs a different mix.
              We provide a clear concept and strategic overview to find the most
              efficient model for your business.
            </p>
            <button className="orange-button">LEARN MORE</button>{" "}
            {/* Button with styling added here */}
          </div>
          <img src={img2} alt="Water" className="service-image" />
        </div>
      </div>

      <div className="toggle-container">
        <ToggleItem />
        <ToggleItem />
        <ToggleItem />
      </div>
    </div>
  );
}

export default Home;
