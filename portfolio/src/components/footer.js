import React from 'react';

const styles = {
    footer: {
        position: 'fixed',
        width: '100%',
        background: 'red'
    }
};

function Footer() {
    return (
        <footer style={styles.footer}>
            <a href="https://github.com/briannalbo">My github Account</a>
        </footer>
    );
};

export default Footer;