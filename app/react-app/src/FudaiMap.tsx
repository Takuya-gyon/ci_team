import React, { useState } from 'react';
import './FudaiMap.css'; // スタイルシートのインポート
import map_image from './assets/nakamozuMap.png'; // 画像のインポート
import pin_image from './assets/公立大ピン.png';
import b4_image from './assets/b4.png'; // 画像のインポート
import MapPin from './MapPin';

function FudaiMap() {
  const [isModalOpen1, setModalOpen1] = useState(false);
  const [isModalOpen2, setModalOpen2] = useState(false);

  const showModal1 = () => {
    setModalOpen1(true);
  };

  const closeModal1 = () => {
    setModalOpen1(false);
  };

  const showModal2 = () => {
    setModalOpen2(true);
  };

  const closeModal2 = () => {
    setModalOpen2(false);
  };

  return (
    <div className="fudaiMap-container">
      <img src={map_image} alt="Background" className="fudaimap-image" />
      
      <MapPin name={"B4"} style={{left: "61.7%", top: "5.5%"}} onClick={showModal1}/>
      <MapPin name={"食堂"} style={{left: "67%", top: "36%"}} onClick={showModal2}/>

      {isModalOpen1 && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal1}>&times;</span>
            <h2>B4棟</h2>
            <img src={b4_image} alt="Modal" className="modal-image" />
            <ul>
              <li>工学域の研究室が主にあるテストテスト</li>
              <li>専門分野の授業が行われる</li>
            </ul>
          </div>
        </div>
      )}

      {isModalOpen2 && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal2}>&times;</span>
            <h2>B4棟</h2>
            <img src={b4_image} alt="Modal" className="modal-image" />
            <ul>
              <li>工学域の研究室が主にある</li>
              <li>専門分野の授業が行われる</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default FudaiMap;