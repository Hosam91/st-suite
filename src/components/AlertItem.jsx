import React, { useState } from 'react'
import styles from './AlertItem.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTag,
  faFileInvoice,
  faArrowTrendUp,
  faMoneyBill,
} from '@fortawesome/free-solid-svg-icons'

export default function AlertItem({data})
{
    const [activeId, setActiveId] = useState(null);

    const toggleShowText = (id) => {
      // If the clicked element is already active, deactivate it. Otherwise, activate the clicked element.
      setActiveId(activeId === id ? null : id);
    };
 


    return (
        <>
            {
                data.map((item,index) => {
                    const { articlBody, articlTitle, win, risk, result, invoiceNumber, companyName } = item
                    return (
                        <div key={index} onClick={()=>toggleShowText(index)}>
                        <ul className={`${styles.headerElement} ${activeId === index ? styles.bg : ''}`}>
                          <li className={styles.alertLi }>
                            <div className="icon">
                              <FontAwesomeIcon icon={faTag} rotation={90} size="xl" />{' '}
                            </div>
                            <div className="text">{companyName}</div>
                          </li>
                           <li className={styles.alertLi }>
                            <div className="icon">
                              <FontAwesomeIcon icon={faFileInvoice} size="xl" />
                            </div>
                            <div className="text">{invoiceNumber}</div>
                          </li>
                           <li className={styles.alertLi }>
                            <div className="icon">
                              <FontAwesomeIcon icon={faArrowTrendUp} size="xl" />
                            </div>
                                    <div className={win?styles.up:styles.down }>
                                        {result}
                                    </div>
                          </li>
                           <li className={styles.alertLi }>
                            <div className="icon">
                              <FontAwesomeIcon icon={faMoneyBill} size="xl" />
                            </div>
                            <div className="text">{risk}</div>
                          </li>
                            </ul>
                            
                            <div className={`${styles.textElement} ${activeId ===index?styles.active:''}` }>
                                <p>${companyName}  { articlTitle}</p>
                          <p>
                                    { articlBody}
                          </p>
                        </div>
                      </div>
                    )
                })
            }
  
      </>
  )
}
