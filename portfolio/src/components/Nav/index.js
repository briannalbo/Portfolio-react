import React, { useEffect } from 'react';

//styling
const styles = {
    nav: {
        height: '20px',
        textAlign: 'center',
        flexDirection: 'row',
        color: 'black',
        fontSize: '16px'
    },
    a: {
      marginRight: '26px'
    }
};

//function to create the nav bar
function Nav(props) {
  
   //establishes each available page as the props
    const { pages = [], setCurrentPage, currentPage } = props;
  
    useEffect(() => {
      document.title = currentPage.name;
    }, [currentPage]);
    return (
      <nav id='navChoices'style = {styles.nav}>
        
          {pages.map((Page) => (
            <a style= {styles.a} key={Page.name}>
              <span onClick={() => setCurrentPage(Page)}>{Page.name}</span>
            </a>
          ))}
        
      </nav>
    )
  }

//exports the nav generating function
export default Nav;