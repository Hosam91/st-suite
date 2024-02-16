import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'



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
  
    
const industries = [
  {
    id:7,
  name: 'health care',
  icon:'fa-solid fa-heart-pulse ' },
  {
    id:8,
  name: ' materials',
  icon:'fa-solid fa-recycle' },
  {
    id:9,
  name: ' energy',
  icon:'fa-solid fa-bolt' },
  {
    id:6,
  name: 'consumer discretionary',
  icon:'fa-solid fa-credit-card' },
  {
    id:5,
  name: ' consumer staples',
  icon:'fa-solid fa-cart-shopping' },
  {
    id:4,
  name: 'real estate',
  icon:'fa-solid fa-house-chimney' },
  {
    id:3,
  name: ' IT',
  icon:'fa-solid fa-lightbulb' },
  {
    id:2,
  name: ' communication',
  icon:'fa-solid fa-comment-dots' },
  {
    id:11,
  name: ' industirial',
  icon:'fa-solid fa-industry' },
  {
    id:12,
  name: ' utilities',
  icon:'fa-solid fa-screwdriver-wrench' },
  {
    id:13,
  name: ' finincials',
  icon:'fa-solid fa-circle-dollar-to-slot' },
]

    library.add(fas, )


const navTabs = [
  {
    name: 'alerts',
    icon:'fa-solid fa-bell',
  },
  {
    name: 'trainig',
    icon:'fa-solid fa-graduation-cap',
  },
  {
    name: 'automation',
    icon:'fa-solid fa-gears',
  },
  {
    name: 'portfolio',
    icon:'fa-solid fa-folder-open',
  },
  {
    name: 'trading',
    icon:'fa-solid fa-chart-line',
  },
];
export { data, industries, navTabs};
