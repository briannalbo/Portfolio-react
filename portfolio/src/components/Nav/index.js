import React, { useEffect } from 'react';
// import { capitalizeFirstLetter } from '../../utils/helpers';



const styles = {
    nav: {
        height: '20px',
        float: 'right',
        flexDirection: 'row',
        color: 'orange',
        paddingRight: '20px',
      
        fontSize: '12px'
        

    }
};




function Nav(props) {
  
  
  
   
    const { pages = [], setCurrentPage, currentPage } = props;
  
    useEffect(() => {
      document.title = currentPage.name;
    }, [currentPage]);
    return (
      <nav style = {styles.nav}>
        <ul className="nav">
          {pages.map((Page) => (
            <li key={Page.name}>
              <span onClick={() => setCurrentPage(Page)}>{Page.name}</span>
            </li>
          ))}
        </ul>
      </nav>
    )
  }


export default Nav;