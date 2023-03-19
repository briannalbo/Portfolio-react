import React from 'react';
import reflection from './projectpics/reflection.png';
import weather from './projectpics/weather-app.png';
import quiz from './projectpics/quizpic.png';
import planner from './projectpics/plannerpic.png';
import currency from './projectpics/currency.png';
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
        width: '450px',
        height: '375px',
        
    },
    img: {
        width: '450px',
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
        <h3>Weather App</h3>
        <a href="https://briannalbo.github.io/weather-app/" target="_blank"><img style= {styles.img}
            src={weather}
          ></img></a>

        </div>

        <div class='card' style={styles.projectsCard}>
        <h3>Currency Converter</h3>
        <a href="https://khinoj.github.io/super-team-project/" target="_blank"><img style= {styles.img}
            src={currency}
          ></img></a>
        
</div>

    
<div class='card' style={styles.projectsCard}>
        <h3>Schedule App</h3>
        <a href="https://briannalbo.github.io/Daily-planner/" target="_blank"><img style= {styles.img}
            src={planner}
          ></img></a>
        
</div>


<div class='card' style={styles.projectsCard}>
        <h3>Simple Quiz</h3>
        <a href="https://briannalbo.github.io/Code-quiz/" target="_blank"><img style= {styles.img}
            src={quiz}
          ></img></a>
        
</div>

      
        
       </div>
    );
};

export default Projects;