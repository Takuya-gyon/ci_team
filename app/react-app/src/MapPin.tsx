import React from 'react';
import './MapPin.css';
import pin_image from './assets/pin_image.png';

function MapPin(props: any) {

  return (
    <div className="pin-wrapper" style={props.style}>
      <img src={pin_image} className='pin-image' onClick={props.onClick}/>
      <div className='pin-name'>{props.name}</div>
    </div>
  );
}

export default MapPin;