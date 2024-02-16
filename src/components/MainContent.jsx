import React from 'react'
import AlertItem from './AlertItem';
import styles from './MainContent.module.css'
import {data} from '../FakeData';

export default function MainContent()
{
    
    
  return (
      <div className={styles.main}>
          <AlertItem {...{data}} />
    </div>
  )
}
