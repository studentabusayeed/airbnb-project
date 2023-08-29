import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../../assets/long-logo.png';
import { FaSearch, FaGlobe } from "react-icons/fa";
import SearchInfo from '../SearchInfo/SearchInfo';
const Navbar = () => {
    const [search, setSearch] = useState(true);
    const handleSearch = () => {
        setSearch(false);
    }
    return (
        <div>
            {
                search ?
                    <div className="navbar">
                        <img src={logo} alt="logo" className="navbar-logo" />
                        <div className='block'>
                            <button onClick={handleSearch} className="search-bar">
                                <div className="search-bar-text">Anywhere</div>
                                <div className="search-bar-text">Any Week</div>
                                <div className="search-bar-text2">Add guests</div>
                                <div className="search-icon-div">
                                    <FaSearch className="search-icon" />
                                </div>
                            </button>
                        </div>
                        <div className="profile-container">
                            <div className="airbnb-your-home-1">Airbnb your home</div>
                            <div className="airbnb-your-home" style={{ fontSize: "1.3rem" }}>
                                <FaGlobe />
                            </div>
                        </div>
                    </div> 
                    : <SearchInfo></SearchInfo>
            } 
        </div>
    );
};

export default Navbar;