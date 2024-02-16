import React from 'react'
import styles from './SelectOption.module.css'
export default function SelectOption({ label, options, onChange }) {
  return (
    <>
      <div className={styles.selectBox}>
        <div className={styles.lable}>
          <h5>{label}</h5>
        </div>
        <div className={styles.options}>
          <ul>
            {options.map((item, index) => {
              return (
                <li className={styles.selectItem} key={index}>
                  {item.value}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  )
}
