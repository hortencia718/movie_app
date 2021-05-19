
// requiring specific classes from packages
import React from 'react';
import ReactDOM from 'react-dom';

// importing things from other files and making it available to the index.js
// by creating componets for those files
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

let h1Object = <h1 id="chicken">hello <span>you</span>you</h1>
console.log(h1Object);
ReactDOM.render( 
  //  h1Object,
  // <React.StrictMode>
    <App />,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
