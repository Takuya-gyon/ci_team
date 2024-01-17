import React from 'react';
import './App.css'; // スタイルシートのインポート
import image from './assets/map.png'; // 画像のインポート

function App() {
  return (
    <div className="App">
      <img src={image} alt="Full Screen" className="full-screen-image" />
    </div>
  );
}

export default App;
