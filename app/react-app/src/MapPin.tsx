import React, { useState } from 'react';
import './MapPin.css';
import pin_image from './assets/pin_image.png';
import detailFile from './assets/detail.json';

interface mapPinProps {
  detailId: string;
  style: {};
}

interface DetailList {
  [key: string]: {
    pinLabel: string;
    name: string;
    imageName: string;
    explain: string[];
  };
}

const MapPin:React.FC<mapPinProps> = (props) => {
  const detailData:DetailList = detailFile;
  const detail = detailData[props.detailId];

  const [isModalOpen, setModalOpen] = useState(false);
  const showModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="pin-wrapper" style={props.style}>
      <img src={pin_image} className='pin-image' onClick={showModal}/>
      <div className='pin-name'>{detail.pinLabel}</div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>{detail.name}</h2>
            { detail.imageName && 
              <img src={require(`./assets/${detail.imageName}`)} alt="Modal" className="modal-image" />
            }
            {detail.explain && (
              <ul>
                {detail.explain.map((text, i) => (
                    <li> {text} </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default MapPin;