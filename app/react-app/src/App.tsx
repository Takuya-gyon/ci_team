import React from 'react';
import TabComponent from './TabComponent';
import Title from './Title';
import { tabs } from './TabsData';
import './App.css'; // スタイルシートのインポート

function App() {
  return (
    <div>
      <Title/>
      <TabComponent tabs={tabs} />
    </div>
  );
}

export default App;