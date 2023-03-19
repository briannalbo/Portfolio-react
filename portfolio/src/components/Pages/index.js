import React from 'react';
import PageContent from '../PageContent';
import About from '../About';
import Projects from '../Projects';
import Resume from '../Resume';
import Contact from '../Contact';




const styles = {
  label: {
    textAlign:'center',
  },
}



function Page({ currentPage }) {

  const renderPage = () => {
    switch (currentPage.name) {
      case 'About Me':
        return <About />;
      case 'Projects':
        return <Projects />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <Projects />;
    }
  };

  return (
    <section>
      <h2 style={styles.label}>{(currentPage.name)}</h2>
      <PageContent>{renderPage()}</PageContent>
    </section>
  );
}
export default Page;