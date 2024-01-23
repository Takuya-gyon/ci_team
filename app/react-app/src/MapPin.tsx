import React from 'react';
//import './App.css'; // スタイルシートのインポート
import pin_image from './assets/公立大ピン.png';

function MapPin() {
  return (
    <div className="pin-wrapper">
      <img src={pin_image}/>
    </div>
  );
}

export default MapPin;