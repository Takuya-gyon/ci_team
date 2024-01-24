import React, { useState } from 'react';
import './FudaiMap.css'; // スタイルシートのインポート
import map_image from './assets/nakamozuMap.png'; // 画像のインポート
import MapPin from './MapPin';

function FudaiMap() {
  return (
    <div className="fudaiMap-container">
      <img src={map_image} alt="Background" className="fudaimap-image" />
      
      <MapPin detailId={"B4"} style={{left: "61.7%", top: "5.5%"}}/>
      <MapPin detailId={"食堂"} style={{left: "67%", top: "36%"}}/>

      
    </div>
  );
}

export default FudaiMap;