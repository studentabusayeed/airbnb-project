import React, { useState } from 'react';
import { Tab, TabList, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShowModal = ({ isOpen, onClose }) => {

    const [activeTab, setActiveTab] = useState("car");

    if (!isOpen) return null;

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };


    return (
        <div>
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="bg-white px-10 py-6 rounded-lg z-10 relative">
                    <div className='flex justify-center'>
                        <button
                            className="absolute top-0 right-0 m-2 p-2 text-gray-500 hover:text-gray-700"
                            onClick={onClose}
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                        <p>Filter</p>
                    </div>
                    <hr className='mt-8 mb-2'></hr>
                    <h2 className="text-xl font-semibold mb-1">Type of place</h2>
                    <p>Search rooms, entire homes, or any type of place.</p>
                    <Tabs className="text-center bg-white text-black font-bold ml-10 mt-6">
                        <TabList className={activeTab ? "bg-[#3B3B3B] text-white border-2" : "bg-white"} style={{ display: 'flex' }}>
                            <Tab className="py-5 px-10" onClick={() => handleTabClick("car")}>Any Type</Tab>
                            <Tab className="py-5 px-10" onClick={() => handleTabClick("track")}>Room</Tab>
                            <Tab className="py-5 px-10" onClick={() => handleTabClick("cicle")}>Entire home</Tab>
                        </TabList>
                    </Tabs>
                    <div>
                        <hr className='mt-8 mb-2'></hr>
                        <h2 className="text-xl font-semibold mb-1">Price range</h2>
                        <p>Nightly prices before fees and taxes</p>
                        <div className='grid grid-cols-2 gap-4 mt-6'>
                            <div className="mb-4 col-span-2 md:col-span-1">
                                <input
                                    type="text"
                                    id="candidateName"
                                    className="w-full border border-gray-400 p-2 rounded-md" placeholder='Menimum'
                                />
                            </div>
                            <div className="mb-4 col-span-2 md:col-span-1">
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full border border-gray-400 p-2 rounded-md" placeholder='Maximum'
                                />
                            </div>
                        </div>
                    </div>
                    {/* <hr className='mt-8 mb-2'></hr>
                    <h2 className="text-xl font-semibold mb-2">Rooms and beds</h2>
                    <p>Bedrooms</p> */}
                </div>
            </div>
        </div>
    );
};

export default ShowModal;