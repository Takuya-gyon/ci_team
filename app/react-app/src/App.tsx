import React from 'react';
import FudaiMap from './FudaiMap';
import TabComponent from './TabComponent';
import { tabs } from './TabsData';
import './App.css'; // スタイルシートのインポート

function App() {
  return (
    <div>
      <TabComponent tabs={tabs} />
    </div>
  );
}

export default App;