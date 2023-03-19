import React from 'react';
import reflection from './projectpics/reflection.png';
import weather from './projectpics/weather-app.png';
import quiz from './projectpics/quizpic.png';
import planner from './projectpics/plannerpic.png';
import currency from './projectpics/currency.png';
import blog from './projectpics/blog.png';
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
        
        marginBottom: '25px',
        textAlign: 'center',
        width: '450px',
        height: '375px',
        marginRight: '15px'
        
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
        <h2>Mood Tracker</h2>
       
        <a href="https://daily-mood.herokuapp.com/" target="_blank"><img style= {styles.img}
            src={reflection}
          ></img></a>
         <a href="https://github.com/briannalbo/Daily-Mood">Mood Tracker repository</a>
</div>

<div class='card' style={styles.projectsCard}>
        <h2>Weather App</h2>
        <a href="https://briannalbo.github.io/weather-app/" target="_blank"><img style= {styles.img}
            src={weather}
          ></img></a>
           <a href="https://github.com/briannalbo/weather-app">Weather App repository</a>

        </div>

        <div class='card' style={styles.projectsCard}>
        <h2>Currency Converter</h2>
        <a href="https://khinoj.github.io/super-team-project/" target="_blank"><img style= {styles.img}
            src={currency}
          ></img></a>
         <a href="https://github.com/khinoj/super-team-project">Currency Converter repository</a>
        
</div>

<div class='card' style={styles.projectsCard}>
        <h2>Blog Site</h2>
       
        <a href="https://albo-blog.herokuapp.com/" target="_blank"><img style= {styles.img}
            src={blog}
          ></img></a>
         <a href="https://github.com/briannalbo/tech-blog">Blog Site repository</a>
</div>

<div class='card' style={styles.projectsCard}>
        <h2>Schedule App</h2>
        <a href="https://briannalbo.github.io/Daily-planner/" target="_blank"><img style= {styles.img}
            src={planner}
          ></img></a>
           <a href="https://github.com/briannalbo/Daily-planner">Schedule App repository</a>
        
</div>


<div class='card' style={styles.projectsCard}>
        <h2>Simple Quiz</h2>
        <a href="https://briannalbo.github.io/Code-quiz/" target="_blank"><img style= {styles.img}
            src={quiz}
          ></img></a>
         <a href="https://github.com/briannalbo/Code-quiz">Simple Quiz repository</a>
</div>

      
        
       </div>
    );
};

export default Projects;