import React from 'react'
import styles from './SearchInput.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';



export default function SearchInput({placeholder})
{
    
  return (
    <div className={styles.searchBox}>
          <input type="text" className={styles.searchInput} placeholder={placeholder} />
          <button className={styles.searchIcon}>
              <FontAwesomeIcon icon={faMagnifyingGlass} className={ styles.magnify} />
          </button>
</div>
  )
}
