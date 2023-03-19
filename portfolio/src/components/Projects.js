import React from 'react';
import reflection from './projectpics/reflection.png';
import '../App.css'

const styles = {
    h1: {
        color: 'orange',
    },
    projects: {
        width: '100%',
        justifyContent: 'center',
        float: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    projectsCard: {
        
        
        textAlign: 'center',
        width: '375px',
        height: '375px',
        
    },
    img: {
        width: '350px',
        height: '300px'
    }
};

function Projects() {
    return (
        <div id='portfolio'>
       
       <div class='card' style={styles.projectsCard}>
        <h3>Mood Tracker</h3>
        <a href="https://daily-mood.herokuapp.com/" target="_blank"><img style= {styles.img}
            src={reflection}
          ></img></a>
      
    
</div>
<div class='card' style={styles.projectsCard}>
        <h3>Mood Tracker</h3>
        <a href="https://daily-mood.herokuapp.com/" target="_blank"><img style= {styles.img}
            src={reflection}
          ></img></a>
      
        
</div>
<div class='card' style={styles.projectsCard}>
        <h3>Mood Tracker</h3>
        <a href="https://daily-mood.herokuapp.com/" target="_blank"><img style= {styles.img}
            src={reflection}
          ></img></a>
      
        </div>
       </div>
    );
};

export default Projects;