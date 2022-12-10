import React from 'react';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Header from './Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;