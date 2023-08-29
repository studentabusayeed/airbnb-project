import React, { useState } from 'react';
import './Filter.css';
import { links } from '../../../../public/images-links';
import { FaFilter } from "react-icons/fa";
import ShowModal from '../../Shared/ShowModal/ShowModal';

const Filter = ({ selectedFilter, setSelectedFilter }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className='flex justify-center items-center'>
            <div className="filter-div">
                {links.map((item, i) => (
                    <div
                        key={i}
                        className={`links-box ${i == selectedFilter && "selected-box"}`}
                        onClick={() => {
                            console.log("selecting key", i);
                            setSelectedFilter(item.label);
                            console.log(item.label);
                        }}
                    >
                        <img src={item.imgSrc} className="links-img" />
                        <p
                            className={`links-label ${i == selectedFilter && "selected-label"}`}
                        >
                            {item.label}
                        </p>
                    </div>
                ))}
            </div>
            <div>
                <button onClick={openModal} className='border-2 border-slate-800 rounded-lg'>
                    <span className="flex justify-center items-center px-3 py-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            aria-hidden="true"
                            role="presentation"
                            focusable="false"
                            style={{ display: 'block', height: '14px', width: '14px', fill: 'currentcolor' }}
                        >
                            <path d="M5 8a3 3 0 0 1 2.83 2H14v2H7.83A3 3 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.83 4H2V4h6.17A3 3 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                        </svg>
                        <span>Filters</span>
                    </span>
                </button>
                <ShowModal isOpen={isModalOpen} onClose={closeModal} />
            </div>
        </div>
    );
};

export default Filter;