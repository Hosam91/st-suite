import React from 'react'
import SearchInput from './SearchInput'
import styles from './PageHeader.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'

export default function PageHeader() {
  return (
    <div className={styles.PageHeader}>
      <div className={styles.pageTitle}>
        <h2>alerts</h2>
      </div>
      <div className={styles.search}>
        <SearchInput placeholder={'Search By...'} />
      </div>
      <div className="notifi">
        <FontAwesomeIcon icon={faBell} size="xl" className={styles.bell}/>{' '}
      </div>
    </div>
  )
}
