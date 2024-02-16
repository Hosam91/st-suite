import React from 'react'
import styles from './AppliedFilters.module.css'
export default function AppliedFilters() {
  return (
      <>
          <div className={styles.upBtns}>
              <span className={styles.applied}>filters applied</span>
              <span className={styles.clr}>clear all</span>
          </div> 
          <div className={`card ${styles.AppliedFilters}`}>
              <span>real state &nbsp;&nbsp; x</span>
          </div>
      </>
  )
}
