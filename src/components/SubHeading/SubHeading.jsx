import React from 'react';
import {images} from'../../constants'
import "./Subheading.css";
const SubHeading = ({title}) => (
  <div style={{marginBottom:'1rem'}} >
    <p className='p__cormorant text-white'>{title}</p>
    <img src={images.spoon} alt="spoon_image" className='spoon__img' />
  </div>
);

export default SubHeading;
