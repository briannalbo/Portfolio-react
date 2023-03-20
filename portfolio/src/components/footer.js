import React from 'react';
import linked from './projectpics/linkin.jpg';
import github from './projectpics/githublogo1.jpg';

const styles = {
    footer: {
        display: 'flex',
        width: '100%',
        height: '70px',
        backgroundColor: 'lightgrey',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '20px',
        marginBottom: '10px'
    },
    img: {
        width: '70px',
        height: '70px'
    }
};

function Footer() {
    return (
        <footer style={styles.footer}>
            <a href="https://github.com/briannalbo" target="_blank"><img style= {styles.img}
            src={github}
          ></img></a>
          <a href="https://www.linkedin.com/in/brianna-alborano-78710226b/" target="_blank"><img style= {styles.img}
            src={linked}
          ></img></a>
        </footer>
    );
};

export default Footer;