import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import B4Photo from './B4.jpg';
import syokudoPhoto from './syokudo.jpg';
import tizuPhoto from './tizu.jpg'; // tizu.jpgをインポート

interface Weather {
  location: string;
  temperature: string;
  description: string;
}

function App() {
  const [showB4Photo, setShowB4Photo] = useState(false);
const [showsyokudoPhoto, setShowsyokudoPhoto] = useState(false);
  const [showTizuPhoto, setShowTizuPhoto] = useState(true); // tizuPhotoの表示のstate
  const [showRoute, setShowRoute] = useState(false);
 
  const [weather, setWeather] = useState<Weather | null>(null);
  useEffect(() => {
    const fetchWeather = async () => {
      const apiKey = '67e4010a8f58b6291c5e44ec596adc1c'; // 環境変数からAPIキーを取得
      const url = `https://api.openweathermap.org/data/2.5/weather?q=Sakai,Naka&appid=${apiKey}&units=metric&lang=ja`;



      try {
        const response = await fetch(url);
        const data = await response.json();
        setWeather({
          location: data.name,
          temperature: data.main.temp,
          description: data.weather[0].description
        });
      } catch (error) {
        console.error("Failed to fetch weather data:", error);
      }
    };

    fetchWeather();
  }, []);

  const handleKorituButtonClick = () => {
    setShowB4Photo(true);
    setShowsyokudoPhoto(true);
    setShowRoute(true);
  };

  const photoStyle: React.CSSProperties = {
  width: '800px',
  height: '500px',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  };

// koritu.jpg用の新しいスタイル
  const B4PhotoStyle: React.CSSProperties = {
  width: '130px', // 例えば幅を400pxにする
  height: '160px',
  position: 'absolute',
  top: '65%', // 位置を少し変える
  left: '54%',
  transform: 'translate(-50%, -60%)', // 中央寄せを調整
  zIndex: 1000, // これにより最前面に表示
  };
  const imageContainerStyle: React.CSSProperties = {
    position: 'relative', // 絶対位置の子要素を持つために必要
    width: '100%', // コンテナの幅を親に合わせる
    textAlign: 'center', // 画像を中央に配置
  };
  const syokudoPhotoStyle: React.CSSProperties = {
  width: '130px', // 例えば幅を400pxにする
  height: '160px',
  position: 'absolute',
  top: '70%', // 位置を少し変える
  left: '81%',
  transform: 'translate(-50%, -60%)', // 中央寄せを調整
  zIndex: 1000, // これにより最前面に表示
  };


  // 横向き経路線のスタイル
   const horizontalRouteStyle: React.CSSProperties = {
    position: 'absolute',
    width: '83px', // 水平線の長さ
    height: '5px', // 線の太さ
    backgroundColor: 'red', // 線の色
    top: '360px', // 適切な値に調整する
    left: '680px', // 適切な値に調整する
    zIndex: 2, // 地図の上に表示
  };

  const horizontalRouteStyle2: React.CSSProperties = {
    position: 'absolute',
    width: '20px', // 水平線の長さ
    height: '5px', // 線の太さ
    backgroundColor: 'red', // 線の色
    top: '280px', // 適切な値に調整する
    left: '765px', // 適切な値に調整する
    zIndex: 2, // 地図の上に表示
  };

  // 垂直経路線のスタイル（上向きの矢印「↑」）
  const verticalRouteStyle: React.CSSProperties = {
    position: 'absolute',
    width: '5px', // 線の太さ
    height: '280px', // 垂直線の長さ
    backgroundColor: 'red', // 線の色
    top: '360px', // 水平線の終点からの適切な値に調整する
    left: '680px', // 水平線の終点と同じに調整する
    zIndex: 2, // 地図の上に表示
  };
  const verticalRouteStyle2: React.CSSProperties = {
    position: 'absolute',
    width: '5px', // 線の太さ
    height: '210px', // 垂直線の長さ
    backgroundColor: 'red', // 線の色
    top: '155px', // 水平線の終点からの適切な値に調整する
    left: '763px', // 水平線の終点と同じに調整する
    zIndex: 2, // 地図の上に表示
  };
  const buttonStyle: React.CSSProperties = {
    margin: '20px', // マージンを適用
    padding: '10px 20px', // パディングを適用
    fontSize: '16px', // フォントサイズを設定
    // カーソルをポインターに変更
    // その他のスタイリングが必要な場合はここに追加
  };

  return (
    <div className="App">


      {/* 写真の表示 */}
      {showB4Photo && (
        <img src={B4Photo} alt="B4" style={B4PhotoStyle} />
      )}
      {/* 写真の表示 */}
      {showsyokudoPhoto && (
        <img src={syokudoPhoto} alt="syokudo" style={syokudoPhotoStyle} />
      )}
      
      {weather && (
        <div style={{ padding: '20px', backgroundColor: '#ddd', marginTop: '20px' }}>
        <h3> {weather.location}の天気</h3>
        <p>気温: {weather.temperature}°C</p>
        <p>天候: {weather.description}</p>
      </div>
    )}

      {/* 地図と経路線の表示 */}
      <div style={imageContainerStyle}>
        <img src={tizuPhoto} alt="Tizu" className="Map-image" />
        {showRoute && <div style={horizontalRouteStyle}></div>}
        {showRoute && <div style={horizontalRouteStyle2}></div>}
        {showRoute && <div style={verticalRouteStyle}></div>}
        {showRoute && <div style={verticalRouteStyle2}></div>}
      </div>
      
      <button onClick={handleKorituButtonClick} style={buttonStyle}>
        Show Photos and Routes
      </button>
    </div>
  );
}
export default App;
