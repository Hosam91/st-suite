import React from 'react';
import './App.css'; 
import PageHeader from './components/PageHeader';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="app-container">
      <div className="menu-bar">
      </div>
      <div className="main-content">
        <PageHeader />
        <MainContent />

      </div>
      <div className="sidebar">Sidebar</div>
    </div>
  );
}

export default App;
