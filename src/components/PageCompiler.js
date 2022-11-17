import React, { useState } from "react";

import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import Projects from './Projects';

function PageCompiler() {
    const [displayedPage, setDisplayedPage] = useState('Projects');

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
        <body className="d-flex flex-column min-vh-100">

            <Header displayedPage={displayedPage} pageChanger={pageChanger} />
            <section className="d-flex flex-row">
                
                <div className="col-2 gutter">
                    {/* <img src={treeleft} className="gutter-filler" alt="tree" /> */}
                </div>

                <div className="col-8 ">
                    {activePage()}
                </div>

                <div className="col-2 gutter">

                </div>

            </section>
            
            <Footer />
        
        </body>
    );
}

export default PageCompiler;