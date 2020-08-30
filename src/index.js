import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PrimeraApp from './PrimeraApp';
import CounterApp from'../src/CounterApp/CounterApp'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    {/* <PrimeraApp saludo="Hola, soy Goku" subtitulo='Ahora soy otro subtitulo'/> */}
    <CounterApp value ={0}></CounterApp>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
