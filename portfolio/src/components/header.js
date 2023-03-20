import React from 'react';
import '../App.css';


const styles = {
    // header: {
    //     width: '100%',
    //     textAlign: 'center',
    //     display: 'inline-block',
    //     height: '80px',
    //     backgroundColor: 'maroon',
    //     color: 'white'
        

    // }
};



function Header(props) {

    

    return (
        <header style = {styles.header}>
            <div>
            <h1>Brianna Alborano</h1>
            </div>
            {props.children}
          
         
        </header>
    );
};

export default Header;