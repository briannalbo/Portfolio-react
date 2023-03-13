import React from 'react';



const styles = {
    nav: {
        height: '20px',
        float: 'right',
        flexDirection: 'row',
        color: 'white',
        paddingRight: '20px',
        backgroundColor: 'black'
        

    }
};



function Navigation(props) {
    const { currentPage, setCurrentPage } = props;

    return (
        <nav style={styles.nav}>
            
        
                <a className={currentPage === "about" ? "active list-group-item" : "list-group-item"}
                    onClick={() => setCurrentPage("about")}>
                    About Me
                </a>
                <a className={currentPage === "projects" ? "active list-group-item" : "list-group-item"}
                    onClick={() => setCurrentPage("projects")}>
                    Projects
                </a>
                <a className={currentPage === "home" ? "active list-group-item" : "list-group-item"}
                    onClick={() => setCurrentPage("home")}>
                    home
                </a>
               
            
        </nav>
    );
};

export default Navigation;