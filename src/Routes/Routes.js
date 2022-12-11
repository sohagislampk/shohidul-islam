import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import About from '../Components/About/About';
import Blog from '../Components/Blog/Blog';
import Contact from '../Components/Contact/Contact';
import Home from '../Components/Home/Home';
import Main from '../Layouts/Main';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/about',
                element: <About></About>
            }
        ]

    }
])

export default routes;