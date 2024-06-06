import React from "react";

import "./Chef.css";
import { images } from "../../constants";
import { SubHeading } from "../../components/index";
const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant t"> What We Believe in</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, id!
          </p>
        </div>
        <p className="p__opensans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          corrupti a necessitatibus voluptates dolore aperiam, maxime labore
          doloremque modi inventore.
        </p>
      </div>
      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
