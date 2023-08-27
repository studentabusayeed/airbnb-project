import React, { useEffect, useState } from 'react';
import './SearchInfo.css';
import logo from '../../../assets/long-logo.png';
import { FaSearch, FaGlobe } from "react-icons/fa";
import Navbar from '../Navbar/Navbar';
import Modal from 'react-modal';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import DatePickers from '../DatePicker/DatePickers';

const SearchInfo = ({ isOpen, onClose }) => {
    const [search, setSearch] = useState(true);


    const handleSearch = () => {
        setSearch(false);
    }

    const [toys, setToys] = useState([]);
    const [searchItem, setSearchItem] = useState("");
    console.log(searchItem);
    console.log(toys);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setToys(data));
    }, []);

    const handleSearchItem = () => {
        fetch(`data.json/${searchItem}`)
            .then((res) => res.json())
            .then((data) => {
                setToys(data);
            });
    };

    return (
        <div>
            {
                search ?
                    <div>
                        <div className="search">
                            <img src={logo} alt="logo" className="navbar-logo" />
                            <div className='flex gap-10 justify-center items-center text-lg ml-8'>
                                <button>Stays</button>
                                <button>Experiences</button>
                                <button>Online Experiences</button>
                            </div>
                            <div className="profile-container">
                                <div className="airbnb-your-home-1">Airbnb your home</div>
                                <div className="airbnb-your-home" style={{ fontSize: "1.3rem" }}>
                                    <FaGlobe />
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <div className='flex justify-center items-center pb-10 w-[65%]'>
                                <button className="search-item">
                                    <div className="w-full bg-[#fff] input-item">
                                        <label htmlFor="" className="text-sm font-semibold px-1 flex justify-start ml-6">Where</label>
                                        <div className="flex ">
                                            <div className="w-5 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                            <input type="text"
                                                onChange={(e) => setSearchItem(e.target.value)} className=" px-2 pt-1 pb-2 rounded-lg outline-none focus:border-[#00ffc3] w-3/4" placeholder="Search destinations" />
                                        </div>
                                    </div>
                                    <div className="w-full bg-[#fff] input-item">
                                        <label htmlFor="" className="text-sm font-semibold px-1 flex justify-start ml-4">Check In</label>
                                        <div className="flex ">
                                            <div className="w-5 z-10 ml-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                            <DatePickers></DatePickers>
                                        </div>
                                    </div>
                                    <div className="w-full bg-[#fff] input-item">
                                        <label htmlFor="" className="text-sm font-semibold px-1 flex justify-start ml-3">Check out</label>
                                        <div className="flex ">
                                            <div className="w-5 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                            <DatePickers></DatePickers>
                                        </div>
                                    </div>
                                    <div className="w-full bg-[#fff] input-item">
                                        <label htmlFor="" className="text-sm font-semibold px-1 flex justify-start ml-6">Who</label>
                                        <div className="flex ">
                                            <div className="w-5 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                            <input onKeyUp={(e) => setExp(e.target.value)} type="text" className=" px-2 pt-1 pb-2 rounded-lg outline-none focus:border-[#00ffc3] w-3/4" placeholder="Add guests" />
                                        </div>
                                    </div>
                                    <a onClick={handleSearchItem} className="search-item-div">
                                        <FaSearch className="search-item-icon" />
                                        <span className='font-semibold ml-2'>Search</span>
                                    </a>
                                </button>
                                <button onClick={handleSearch} className="btn btn-sm btn-circle ml-20">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </div>
                        </div>
                    </div> : <div><Navbar></Navbar></div>
            }
        </div>
    );
};

export default SearchInfo;