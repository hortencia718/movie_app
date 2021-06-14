import React from 'react'
// import './css_files/styles.css';

// function Component: function that returns One chunk of JSX (<></>)
// functional componets get their props from "props"

function Header(props){
   console.log(props)
   return(<h1>{props.title}</h1>
   // <h2>choose a movie </h2>
      )
}

// write you export at the bottom always on every component

export default Header