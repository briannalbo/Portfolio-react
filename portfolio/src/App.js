import './App.css';
import { useState } from 'react';
// import Home from './components/Home';
import Footer from './components/footer';
import Header from './components/header';
// import Projects from './components/Projects';
// import About from './components/About';
import Nav from './components/Nav';
// import Example from './components/Example';
import Page from './components/Pages';



  function App() {
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
  
    const [currentPage, setCurrentPage] = useState(pages[0]);



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
  
 
  
export default App;
