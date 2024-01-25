import React from 'react';
import TabComponent from './TabComponent';
import Title from './Title';
import WeatherComponent from './WeatherComponent';
import { tabs } from './TabsData';
import './App.css'; // スタイルシートのインポート

function App() {
  return (
    <div id="main-wrapper">
      <Title/>
      <div id="content-wrapper">
        <WeatherComponent/>
        <TabComponent tabs={tabs}/>
      </div>
    </div>
  );
}

export default App;