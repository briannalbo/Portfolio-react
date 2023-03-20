import './App.css';
import { useState } from 'react';
//imports the functions that generate the page content
import Footer from './components/footer';
import Header from './components/header';
import Nav from './components/Nav';
import Page from './components/Pages';


//function to generate the app
  function App() {
    //object for each page option
    const [pages] = useState([
      {
        name: "About Me"
      },
      { name: "Projects" },
      { name: "Contact" },
      {
        name: "Resume"
      },
    ]);
  //use state and sets index zero(aboutme) as default
    const [currentPage, setCurrentPage] = useState(pages[0]);


//compiles all imported pieces of page and organizes them into the app
    return (
      <div>
        <Header>
          <Nav
            pages={pages}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          ></Nav>
        </Header>
      
        <main>
          <Page currentPage={currentPage}></Page>
        </main>
        <Footer />
      </div>
    );
  }
  
 
  //exports app
export default App;
