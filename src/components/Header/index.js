import React from "react";
import Nav from '../Nav';
import logo from '../../assets/images/texas-blades-hero2.jpg'

function Header({ displayedPage, pageChanger }) {
    return (
        <div className="shadow-lg container-fluid">
            <div className="row navbar accent1 sticky">
                <h1 className="col-3 justify-content-start main-color"><a className="main-color text-decoration-none" href="#Home">TB</a></h1>
                
                <div className="col-3">
                    <Nav displayedPage={displayedPage} pageChanger={pageChanger} />
                </div>
            </div>
            <div className="tile col-12 pt-4 pb-4 d-flex justify-content-center">
                <a href="#home"><img src={logo} className="texas-blades-hero" alt="texas blades logo" /></a>
            </div>
        </div>    
          
            
        
    )

}

export default Header;