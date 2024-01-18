import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import korituPhoto from './koritu.jpg';
import tizuPhoto from './tizu.jpg'; // tizu.jpgをインポート

interface Weather {
  location: string;
  temperature: string;
  description: string;
}

function App() {
  const [showKorituPhoto, setShowKorituPhoto] = useState(false);
  const [showTizuPhoto, setShowTizuPhoto] = useState(true); // tizuPhotoの表示のstate
  const [showRoute, setShowRoute] = useState(false);
 
  const [weather, setWeather] = useState<Weather | null>(null); 
  useEffect(() => {
    // ここに天気情報を取得するためのAPI呼び出しを書きます
    // この例では、フェイクのJSONデータを直接設定しています
    const fakeWeatherData = {
      location: 'OMU Nakamozu',
      temperature: '10',
      description: 'Cloudy'
    };
    setWeather(fakeWeatherData);
  }, []);

  const handleKorituButtonClick = () => {
    setShowKorituPhoto(true);
    setShowRoute(true);
  };

  const photoStyle: React.CSSProperties = {
  width: '800px',
  height: '500px',
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  };

// koritu.jpg用の新しいスタイル
  const korituPhotoStyle: React.CSSProperties = {
  width: '130px', // 例えば幅を400pxにする
  height: '160px',
  position: 'absolute',
  top: '75%', // 位置を少し変える
  left: '58%',
  transform: 'translate(-50%, -60%)', // 中央寄せを調整
  zIndex: 1000, // これにより最前面に表示
  };
  const imageContainerStyle: React.CSSProperties = {
    position: 'relative', // 絶対位置の子要素を持つために必要
    width: '100%', // コンテナの幅を親に合わせる
    textAlign: 'center', // 画像を中央に配置
  };

  // 横向き経路線のスタイル
   const horizontalRouteStyle: React.CSSProperties = {
    position: 'absolute',
    width: '105px', // 水平線の長さ
    height: '5px', // 線の太さ
    backgroundColor: 'red', // 線の色
    top: '340px', // 適切な値に調整する
    left: '680px', // 適切な値に調整する
    zIndex: 2, // 地図の上に表示
  };

  // 垂直経路線のスタイル（上向きの矢印「↑」）
  const verticalRouteStyle: React.CSSProperties = {
    position: 'absolute',
    width: '5px', // 線の太さ
    height: '300px', // 垂直線の長さ
    backgroundColor: 'red', // 線の色
    top: '340px', // 水平線の終点からの適切な値に調整する
    left: '680px', // 水平線の終点と同じに調整する
    zIndex: 2, // 地図の上に表示
  };
  const verticalRouteStyle2: React.CSSProperties = {
    position: 'absolute',
    width: '5px', // 線の太さ
    height: '200px', // 垂直線の長さ
    backgroundColor: 'red', // 線の色
    top: '140px', // 水平線の終点からの適切な値に調整する
    left: '780px', // 水平線の終点と同じに調整する
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
      {showKorituPhoto && (
        <img src={korituPhoto} alt="Koritu" style={korituPhotoStyle} />
      )}
      
      {weather && (
        <div style={{ padding: '20px', backgroundColor: '#ddd', marginTop: '20px' }}>
          <h2>Weather Information</h2>
          <p>Location: {weather.location}</p>
          <p>Temperature: {weather.temperature}℃</p>
          <p>Description: {weather.description}</p>
        </div>
      )}

      {/* 地図と経路線の表示 */}
      <div style={imageContainerStyle}>
        <img src={tizuPhoto} alt="Tizu" className="Map-image" />
        {showRoute && <div style={horizontalRouteStyle}></div>}
        {showRoute && <div style={verticalRouteStyle}></div>}
        {showRoute && <div style={verticalRouteStyle2}></div>}
      </div>
      
      <button onClick={handleKorituButtonClick} style={buttonStyle}>
        Show Koritu Photo
      </button>
    </div>
  );
}
export default App;
