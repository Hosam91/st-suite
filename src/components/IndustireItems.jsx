import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {industries} from '../FakeData';
import styles from './IndustireItems.module.css'

export default function  IndustireItems() {
  return ( <div className={styles.industries}>
    <ul className={ styles.indusriesList}>
      {
        industries.map((item) =>
        {
          const { id, name, icon } = item
          
          return (
            <li key={id} className={styles.item }>
            <span className="icon">
            <FontAwesomeIcon icon={icon }  style={{color: "#ffffff",}} />            </span>
            <span className="text">
              {name }
            </span>
          </li>
          )
        })
      }
  

      </ul>



  </div>
  )
}
