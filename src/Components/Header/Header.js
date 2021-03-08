import React from 'react';
import logo from '../../images/logoHeader.jpg';
import './Header.css';


const Header = () => {
    return (
        <div className="header">
            <div>
                <img src={logo} alt=""/>
                <h2 className="header-text">Bangladesh Cricket Board</h2>
                <h5 className="header-text">Playing XI Select For Next Series</h5>
            </div>
        </div>
    );
};

export default Header;