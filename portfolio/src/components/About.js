import React from 'react';
//imports picture
import me from './projectpics/meportfolio.jpg';
//imports css
import '../App.css'
//object for styling/ will relocate the styling code to css file at a later date
const styles = {
    h1: {
        color: 'orange',
    },
    aboutme: {
        width: '100%',
        justifyContent: 'center',
        float: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    img: {
        float: 'right',
        width: '300px',
        height: '400px',
        paddingRight: '20px',
        borderRadius: '25%'
    },
    text: {
        width: '50%',
        paddingLeft: '20px',
        fontSize: '24px'
    }
}
//function to render the about me page content
function About() {
    return (
        <div id='aboutme'>
     

       <div class='card' style={styles.text}>
       <img style= {styles.img}
            src={me}
          ></img>
        <p>I have always been passionate about learning. Throughout my time in various undergrad colleges I
             would joke that "I wish I could make a career out of being a student." That is exactly 
             what I found in the field of Web Development. I deeply enjoy being in an everchanging field 
             where learning is a constant. I began my coding journey in the summer of 2022 by watching tutorials 
             and doing some research on my own. By the Fall of 2022, I enrolled in the Rutgers Coding Bootcamp.
             In addition to developing skills in Web Development, the Rutgers program allowed me the opportunity to
             collaborate with other developers to build projects. </p>
       
       
          </div>
          </div>
    );
};
//exports about me function
export default About;