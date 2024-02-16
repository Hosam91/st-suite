import React, { useEffect, useState } from 'react';
import './App.css'; 
import PageHeader from './components/PageHeader';
import MainContent from './components/MainContent';
import Header from './components/Header';
import AppliedFilters from './components/AppliedFilters';
import SearchInput from './components/SearchInput';
import Industries from './components/Industries';
import SmallMenuBar from './components/SmallMenuBar';
import LargMenuBar from './components/LargMenuBar';

function App()
{
  const [isHovered, setIsHovered] = useState(false);
  console.log(isHovered)
  const openSideBar = () =>
  {
    setIsHovered(true)
    }
  useEffect(() =>
  {
    // setIsHovered(!isHovered)

  },[isHovered])
  return (
    <div className="app-container">
      <div className="menu-bar"
        onMouseEnter={() =>  openSideBar()  }
        onMouseLeave={() => setIsHovered(false)}
      >
         {isHovered ?  <div className="largMenu">
          <LargMenuBar/>
        </div>: <div className="smallMenu">
          <SmallMenuBar/>
        </div>}
       
        
      </div>
      <div className="main-content">
        <PageHeader />
        <MainContent />
      </div>
      <div className="sidebar">
        <Header headerTitle={'filters'} tAlign={'center'} fSize={ '25px'}  />
        <AppliedFilters />
        <div className="card">
        <Header headerTitle={'stock'} tAlign={'start'} fSize={ '18px'} />
          <SearchInput placeholder={'$TICKER'} />
          <Industries/>
        </div>
        <button className='apply' > Apply</button>
      </div>
    </div>
  );
}

export default App;
