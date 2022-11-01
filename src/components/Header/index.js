import React from "react";
import Nav from '../Nav';
import hero from '../../assets/images/texas-blades-hero1.jpg'

function Header() {
    return (
        <div className="container text-center">
            <div className="row">
                <h1 className="col-6">TEXAS BLADES</h1>
                <Nav className="col-6" />
            </div>
            
            This is the Header
            <div className="col-12 justify-content-center align-self-center">
                <img src={hero} class="texas-blades-hero" alt="texas blades logo" />
            </div>
            
        </div>
    )

}

export default Header;