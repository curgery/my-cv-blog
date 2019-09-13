import React from 'react';
import { Link } from 'react-router-dom';
import IMG from './pages/img/img_1224.JPG';


const NavBar = () => (
    
    <nav>
        <img
            src={IMG}
            alt="avatar"
            width="175"
            height="150"
            style={{ transform: 'rotate(90deg)'}}
        />
        <ul>
            <li >              
                <Link to="/">Robert Glover
                </Link>              
            </li>
            <li>
                <Link to="/articles-list">Articles</Link>
            </li>
            <li>
                <Link to="/about">CV</Link>
            </li>
           
        </ul>
        
    </nav>
  );

export default NavBar;