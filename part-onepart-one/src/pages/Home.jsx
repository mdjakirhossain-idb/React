import React from 'react';
import {Link, Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <nav>
            <Link to="/anotherlink" className="nav-link">My Profile</Link>
            </nav>
            <Outlet />
        </div>
    );
};

export default Home;