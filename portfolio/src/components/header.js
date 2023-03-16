import React from 'react';


const styles = {
    header: {
        width: '100%',
        textAlign: 'center',
        display: 'inline-block',
        height: '50px',

    }
};



function Header(props) {

    

    return (
        <header style = {styles.header}>
            <div>
            <h3>Welcome to my Portfolio</h3>
            </div>
            {props.children}
          
         
        </header>
    );
};

export default Header;