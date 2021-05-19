import React from 'react';
import Header from './Header'
import Store from './Store'

import './App.css';

// props is iformation coming from a parent component down to its children

function App() {
  return (
    <div className="App">
     {/* instance */}
    <Header />
    <Store />
        
       
    
    </div>
  );
}

export default App;

// a component is basically a structure of your html
// and contains event listners 
// just like an html page and a seprate JS file but in react its all in one page or 
// one component of that page example 
// a component for a container of 
