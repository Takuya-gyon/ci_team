import React from 'react';
import TabComponent from './TabComponent';
import Title from './Title';
import { tabs } from './TabsData';
import './App.css'; // スタイルシートのインポート

function App() {
  return (
    <div id="main-wrapper">
      <Title/>
      <div id="content-wrapper">
        <TabComponent tabs={tabs}/>
      </div>
    </div>
  );
}

export default App;