import React from 'react';
import styles from './LargMenuBar.module.css'
import logo from '../street suite logo-04.png'
import avatar from '../user.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { navTabs } from '../FakeData';

export default function LargMenuBar()
{

    
  return (
      <>
          
          <div className={styles.up }>
          <div className={styles.logo}>
              <img src={logo} alt="street suite logo" />
          </div> 
          <ul>
              {
                  navTabs.map((item,index) =>
                  {
                      const { name, icon } = item
                      return (
                        <li className={styles.navTab}>
                        <span className={styles.icon}>
                        <FontAwesomeIcon icon={icon} size="xl" />
      
                        </span>
                        <span className={styles.navItemText}>
                                  <h5> { name} </h5>
                        </span>
                    </li>
                      )
                  })
              }
            
          </ul>
          </div>
          <div className={ styles.avatar}>
              <div className={styles.img}>
                  <img src={ avatar} alt="user" />
                  
                  </div>
                  <div className="name">
                      <h5>Moni Roy</h5>
                      <p>Beginer</p>
                  </div>
                </div>
      </>
  )
}
