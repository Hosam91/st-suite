import React from 'react'
import styles from './SmallMenuBar.module.css'
import logo from '../street suite logo-04.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { navTabs } from '../FakeData';

export default function SmallMenuBar() {
  return (
    <>
           <div className={styles.logo}>
              <img src={logo} alt="street suite logo" />
          </div> 
              <ul className={ styles.navItems}>
              {
                  navTabs.map((item,index) =>
                  {
                      const { icon } = item
                      return (
                        <li className={styles.navTab} key={index}>
                        <span className={styles.icon}>
                        <FontAwesomeIcon icon={icon} size="xl" />
      
                        </span>
                      
                    </li>
                      )
                  })
              }
            
          </ul>
       
      </>
  )
}
