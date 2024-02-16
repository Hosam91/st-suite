import React from 'react'
import AlertItem from './AlertItem';
import styles from './MainContent.module.css'
export default function MainContent()
{
    const data = [{
        companyName : 'AMZN',
        invoiceNumber : '200',
          result : '-.25%',
          resultColor : 'up',
       risk: 'Low Risk',
       win:true,
       articlTitle: ' just announced an acquition of $NFLX at 200 B',
        articlBody:'this is an arbitage opprtunity, with the max gain this is an arbitage opprtunity, with the max gain this is an arbitage opprtunity, with the max gain '
   },{
       companyName : 'Tsla',
       invoiceNumber : '200',
         result : '-.25%',
         resultColor : 'up',
      risk: 'Low Risk',
      win:false,
      articlTitle: ' just announced an acquition of $NFLX at 200 B',
       articlBody:'this is an arbitage opprtunity, with the max gain this is an arbitage opprtunity, with the max gain this is an arbitage opprtunity, with the max gain '
       },
       {
           companyName : 'ABQQ',
           invoiceNumber : '200',
             result : '-.25%',
             resultColor : 'up',
          risk: 'Low Risk',
          win:true,
          articlTitle: ' just announced an acquition of $NFLX at 200 B',
           articlBody:'this is an arbitage opprtunity, with the max gain this is an arbitage opprtunity, with the max gain this is an arbitage opprtunity, with the max gain '
       },
       {
           companyName : 'MSFT',
           invoiceNumber : '200',
             result : '-.25%',
             resultColor : 'up',
          risk: 'Low Risk',
          win:false,
          articlTitle: ' PYPL announced an acquition of $NFLX at 200 B',
           articlBody:'this is an arbitage opprtunity, with the max gain this is an arbitage opprtunity, with the max gain this is an arbitage opprtunity, with the max gain '
       },
       {
           companyName : 'NFLX',
           invoiceNumber : '200',
             result : '-.25%',
             resultColor : 'up',
          risk: 'Low Risk',
          win:false,
          articlTitle: ' just announced an acquition of $NFLX at 200 B',
           articlBody:'this is an arbitage opprtunity, with the max gain this is an arbitage opprtunity, with the max gain this is an arbitage opprtunity, with the max gain '
       },
       {
           companyName : 'AMZN',
           invoiceNumber : '200',
             result : '-.25%',
             resultColor : 'up',
          risk: 'Low Risk',
          win:true,
          articlTitle: ' just announced an acquition of $NFLX at 200 B',
           articlBody:'this is an arbitage opprtunity, with the max gain this is an arbitage opprtunity, with the max gain this is an arbitage opprtunity, with the max gain '
       },
       {
           companyName : 'AMZN',
           invoiceNumber : '200',
             result : '-.25%',
             resultColor : 'up',
          risk: 'Low Risk',
          win:false,
          articlTitle: ' just announced an acquition of $NFLX at 200 B',
           articlBody:'this is an arbitage opprtunity, with the max gain this is an arbitage opprtunity, with the max gain this is an arbitage opprtunity, with the max gain '
       },
       {
           companyName : 'AMZN',
           invoiceNumber : '200',
             result : '-.25%',
             resultColor : 'up',
          risk: 'Low Risk',
          win:true,
          articlTitle: ' just announced an acquition of $NFLX at 200 B',
           articlBody:'this is an arbitage opprtunity, with the max gain this is an arbitage opprtunity, with the max gain this is an arbitage opprtunity, with the max gain '
       },
       {
           companyName : 'AMZN',
           invoiceNumber : '200',
             result : '-.25%',
             resultColor : 'up',
          risk: 'Low Risk',
          win:true,
          articlTitle: ' just announced an acquition of $NFLX at 200 B',
           articlBody:'this is an arbitage opprtunity, with the max gain this is an arbitage opprtunity, with the max gain this is an arbitage opprtunity, with the max gain '
       },
       {
           companyName : 'AMZN',
           invoiceNumber : '200',
             result : '-.25%',
             resultColor : 'up',
          risk: 'Low Risk',
          win:false,
          articlTitle: ' just announced an acquition of $NFLX at 200 B',
           articlBody:'this is an arbitage opprtunity, with the max gain this is an arbitage opprtunity, with the max gain this is an arbitage opprtunity, with the max gain '
      },]
    
  return (
      <div className={styles.main}>
          <AlertItem {...{data}} />
    </div>
  )
}
