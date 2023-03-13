import React from 'react';
import Navigation from './Navigation';

const styles = {
    header: {
        position: 'fixed',
        width: '100%',
        height: '50px',
        background: 'green'
    }
};

function Header(props) {

    const { currentPage, setCurrentPage } = props;

    return (
        <header style={styles.header}>
            <h3>Welcome to my Portfolio</h3>
            {/* <Navigation currentTab={currentPage}
                setCurrentTab={setCurrentPage}></Navigation> */}
        </header>
    );
};

export default Header;