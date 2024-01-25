import React, { useState } from 'react';
import './FudaiMap.css'; // スタイルシートのインポート
import map_image from './assets/nakamozuMap.png'; // 画像のインポート
import MapPin from './MapPin';

function FudaiMap() {
  return (
    <div className="fudaiMap-container">
      <img src={map_image} alt="Background" className="fudaimap-image" />
      
      <MapPin detailId={"学生会館"} style={{left: "67%", top: "40%"}}/>
      <MapPin detailId={"B3"} style={{left: "59.3%", top: "20%"}}/>
      <MapPin detailId={"A5"} style={{left: "71.5%", top: "59%"}}/>
      <MapPin detailId={"B4"} style={{left: "62.5%", top: "9%"}}/>
      <MapPin detailId={"B1棟と和弓場の間の緑のところ"} style={{left: "54%", top: "43%"}}/>
      <MapPin detailId={"B3棟とB5棟の間"} style={{left: "67%", top: "22%"}}/>
      <MapPin detailId={"A6棟とA8棟とA10棟で囲まれてるところ"} style={{left: "84%", top: "65%"}}/>
      <MapPin detailId={"ひらめき広場"} style={{left: "71.3%", top: "35%"}}/>
      <MapPin detailId={"B8"} style={{left: "75.3%", top: "8%"}}/>
    </div>
  );
}

export default FudaiMap;