import React from 'react';



// class components need a function called "render" that returns ONE chunk of Jsx
// class componets should be capitalized

class Store extends React.Component{
    render(){
        return(
            <div>
               <h1><p>Store: Movies </p></h1> 
            </div>
        )
    }
}

export default Store