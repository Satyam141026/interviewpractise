import React from 'react';
import ReactDOM from 'react-dom/client';
import { A } from './A';
import B from './B';
import Errorjs from './Errorjs';
//import ChildToProp from './ChildToProp';
//import './index.css';
import Todos from './Todos';
/* import App from './App';
import UseMemoHook from './UseMemoHook';
import Purememoclass from './Purememoclass';
import Userefhook from './Userefhook'; */
//import Useforwdref1 from './Useforwdref1';
/* import App from './App'; */


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
{/*         <App /> 
    {/*  <UseMemoHook /> */}
{/*     <Purememoclass/> */}
{/*     <Userefhook/> */}
{/*     <Useforwdref1/> */}
{/* <Todos/> */}
<Errorjs>

<A/>

</Errorjs>

<Errorjs>

<B/>

</Errorjs>


 
  </React.StrictMode>
);

