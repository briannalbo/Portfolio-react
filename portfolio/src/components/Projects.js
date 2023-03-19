import React from 'react';
import reflection from './projectpics/reflection.png';

const styles = {
    h1: {
        color: 'orange',
    },
    projects: {
        justifyContent: 'center',
        float: 'center',
        textAlign: 'center'
    },
    img: {
        width: '350px',
        height: '300px'
    }
};

function Projects() {
    return (
        <div style={styles.projects}>
       
       <div class='card'>
        <h3>Mood Tracker</h3>
        <a href="https://daily-mood.herokuapp.com/" target="_blank"><img style= {styles.img}
            src={reflection}
          ></img></a>
      
        <article></article>
</div>
       </div>
    );
};

export default Projects;