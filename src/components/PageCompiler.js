import React, { useState } from "react";

import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import Projects from './Projects';

function PageCompiler() {
    const [displayedPage, setDisplayedPage] = useState('About');

    const activePage = () => {
        if (displayedPage === 'About') {
            return <About />;
        }
        if (displayedPage === 'Contact') {
            return <Contact />;
        }
        if (displayedPage === 'Projects') {
            return <Projects />;
        }
    }

    const pageChanger = (page) => setDisplayedPage(page);

    return (
        <body>

            <Header displayedPage={displayedPage} pageChanger={pageChanger} />
        
            <div>
                {activePage()}
            </div>

            <Footer />

        </body>
    );
}

export default PageCompiler;