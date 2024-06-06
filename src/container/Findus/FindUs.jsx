import React from "react";
import { images, data } from "../../constants";
import { SubHeading, MenuItem } from "../../components";
const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        Find Us
      </h1>
      <div className="app__wrapper-contact">
        <p className="p__opensans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p className="p__cormorant" style={{ color: "#DCCA87" }}>
          Opening Hours
        </p>
        <p className="p__opensans">Mon - Fri: 10:00 Am - 2:00 Am</p>
        <p className="p__opensans">Sat - Sun: 10:00 Am - #:00 Am</p>
      </div>
      <button className="custom__button" style={{marginTop:'2rem'}}>Visit Us</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="findUs" />
    </div>
  </div>
);

export default FindUs;
