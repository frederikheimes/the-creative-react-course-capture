import React from "react";
import home1 from "../img/home1.png";

const AboutSection = () => {
  return (
    <div>
      <div className="discription">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>
              your <span>dreams</span> come
            </h2>
          </div>
          <div className="hide">
            <h2>true.</h2>
          </div>
        </div>
        <p>
          Contact us for any photoraphy or videography ideas that you have. We
          have professionals with amazong skills.
        </p>
        <button>Contact us</button>
        <div className="image">
          <img src={home1} alt="guy with a camera" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
