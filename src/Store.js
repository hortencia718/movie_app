import React from 'react';
// import './css_files/styles.css';



// class components need a function called "render" that returns ONE chunk of Jsx
// class componets should be capitalized
// class componets gets their props from "this.props"
// only in a class components should a class be written w/o "this"

class Store extends React.Component{

    render(){
        console.log(this.props.movieName)
        // in class components, write your console.log above your r/t below your render
        return(
            <li className="container">
                <img src={"./images/BTFMovie.png"}></img>
                {/* <img src="images/terminator.png" alt="terminator movie poster"></img> */}
                {/* <img src="images/shapeofwater.png" alt="the shape of water movie poster"></img> */}
                <p>Movie name: <span>{this.props.movieName}</span></p>
                <button onClick={() => {
                    console.log("hello from the button")
                } }>Select: Generes 0</button>
                
            </li>
            // <div>
            //    <h1><p>Store: {this.props.movieName} </p></h1> 
            // </div>
        )
    }
}

export default Store

// practice react with this app for movies