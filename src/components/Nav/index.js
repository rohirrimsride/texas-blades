import React from "react";

function Nav({ displayedPage, pageChanger }) {
    return (
        <nav>
            This is the Nav Bar
            <ul>
                <li>
                    <a 
                        href="#about"
                        onClick={() => pageChanger('About')}
                        className={displayedPage === 'About' ? 'active-nav' : 'inactive-nav'}>About
                    </a>
                </li>
                <li>
                    <a
                        href="#projects"
                        onClick={() => pageChanger('Projects')}
                        className={displayedPage === 'Projects' ? 'active-nav' : 'inactive-nav'}>Projects
                    </a>
                </li>
                <li>
                    <a
                        href="#contact"
                        onClick={() => pageChanger('Contact')}
                        className={displayedPage === 'Contact' ? 'active-nav' : 'inactive-nav'}>Contact

                    </a>
                </li>
            </ul>
        </nav>
    )

}

export default Nav;