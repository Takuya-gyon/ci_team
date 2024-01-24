import React, { useState } from 'react';
import './IchidaiMap.css'; // スタイルシートのインポート
import map_image from './assets/sugimotoMap.png'; // 画像のインポート
import MapPin from './MapPin';

function IchidaiMap() {
  return (
    <div className="ichidaiMap-container">
      <img src={map_image} alt="Background" className="ichidaimap-image" />
      
      <MapPin detailId={"学情"} style={{left: "46%", top: "24.5%"}}/>
      <MapPin detailId={"1号館"} style={{left: "43%", top: "50%"}}/>
      <MapPin detailId={"工学部棟"} style={{left: "34%", top: "23%"}}/>
      <MapPin detailId={"8号館"} style={{left: "67%", top: "8%"}}/>
      <MapPin detailId={"学食・シェリー"} style={{left: "52%", top: "49%"}}/>
      <MapPin detailId={"高原記念館"} style={{left: "37.7%", top: "40%"}}/>
      <MapPin detailId={"理学部棟"} style={{left: "46%", top: "9%"}}/>
      <MapPin detailId={"第１体育館"} style={{left: "70%", top: "14%"}}/>
    </div>
  );
}

export default IchidaiMap;