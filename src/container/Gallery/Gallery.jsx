import React, { useRef } from "react";
import { images, data } from "../../constants";
import { SubHeading, MenuItem } from "../../components";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import "./Gallery.css";

const Gallery = () => {
  const scrollRef = useRef(null);
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollLeft -= 300;
    } else if(direction==="right"){
      current.scrollLeft += 300;
    }
  };
  const galleryImage = [
    images.gallery01,
    images.gallery02,
    images.gallery03,
    images.gallery04,
  ];
  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo</h1>
        <p className="p__opensans" style={{ color: "#AAA", marginTop: "2rem" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          modi.
        </p>
        <button className="custom__button" type="button">
          View More
        </button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {galleryImage.map((image, index) => (
            <div
              className="app__gallery-images_card flex__center"
              key={`gallery_image-${index + 1}`}
            >
              <img src={image} alt="gallery" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div
          className="app__gallery-images_arrows"
        >
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
