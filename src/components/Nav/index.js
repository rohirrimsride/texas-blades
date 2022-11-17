import React from "react";

function Nav({ displayedPage, pageChanger }) {
    return (
        <nav>
            <ul className="p-0 m-0 d-flex align-items-end justify-content-evenly list-unstyled">
                <li className={displayedPage === 'About' ? 'active-nav' : 'inactive-nav'}>
                    <a 
                        href="#about"
                        onClick={() => pageChanger('About')}
                        class="text-decoration-none main-color">About
                    </a>
                </li>
                <li className={displayedPage === 'Projects' ? 'active-nav' : 'inactive-nav'}>
                    <a
                        href="#projects"                       
                        onClick={() => pageChanger('Projects')}
                        class="text-decoration-none main-color">Projects
                    </a>
                </li>
                <li className={displayedPage === 'Contact' ? 'active-nav' : 'inactive-nav'}>
                    <a
                        href="#contact"
                        onClick={() => pageChanger('Contact')}
                        class="text-decoration-none main-color">Contact
                    </a>
                </li>
            </ul>
        </nav>
    )

}

export default Nav;