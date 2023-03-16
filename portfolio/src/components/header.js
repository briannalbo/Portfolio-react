import React from 'react';


const styles = {
    header: {
        position: 'fixed',
        width: '100%',
        height: '50px',
        background: 'green'
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