import React, { useEffect } from 'react';
// import { capitalizeFirstLetter } from '../../utils/helpers';



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




function Nav(props) {
  
  
  
   
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


export default Nav;