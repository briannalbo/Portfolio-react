import './App.css';
import { useState } from 'react';
import Home from './components/Home';
import Footer from './components/footer';
import Header from './components/header';
import Projects from './components/Projects';
import About from './components/About';
import Navigation from './components/Navigation';
import Example from './components/Example';

function App() {
  const [pages] = useState([
    {
      name: "about me"
    },
    { name: "projects" },
    { name: "home" },
    
  ]);


  const [currentPage, setCurrentPage] = useState(pages[0]);

  const renderPage = (currentPage) => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about me':
        return <About />
      case 'projects':
        return <Projects />;
        default:
          return <Example />;
    }
  }


  return (
  
      <div>
        <div>
          <Header>
        <nav>
            <Navigation pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}></Navigation>
            </nav>
        </Header>
        </div>
      <div>
        <main>
        {renderPage()}
        </main>
        </div>
        <div>
        <Footer></Footer>
        </div>
      </div>
    );
  
  }
  
export default App;
