import React, { useState } from 'react';
import Header from './Header';
import IndustireItems from './IndustireItems';
import SelectOption from './SelectOption';
import styles from './Industries.module.css'


export default function Industries()
{
  const [selectedElement, setSelectedElement] = useState('');

  const handleChange = (event) => {
    setSelectedElement(event.target.value);
  };

  const  assets= [
    { value: 'stocks' },
    { value: 'options'  },
    { value: 'future' }
  ];
  const  stratigies= [
    { value: 'big option buys' },
    { value: 'merger arbitrage'  },
    { value: 'short reports' }
  ];
  
  return (
    <>
    <Header headerTitle={'industry'} tAlign={'start'} fSize={ '15px'} />
    
      <IndustireItems />
      <div className={ styles.sellects}>
      <SelectOption
          label="strategy"
          options={stratigies}
          value={selectedElement}
          onChange={handleChange}
      /> 
      <SelectOption
          label="asset"
          options={assets}
          value={selectedElement}
          onChange={handleChange}
      /> 
</div>
    </>
 
  )
}
