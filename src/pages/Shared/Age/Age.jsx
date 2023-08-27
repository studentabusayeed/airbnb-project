import React, { useState } from 'react';

const Age = ({ isOpen, onClose }) => {
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);
    const [pets, setPets] = useState(0);

    const handleIncrement = (stateUpdater) => {
        stateUpdater((prevValue) => prevValue + 1);
    };

    const handleDecrement = (stateUpdater) => {
        stateUpdater((prevValue) => (prevValue > 0 ? prevValue - 1 : 0));
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-md">
                {/* Modal content */}
                <h2 className="text-xl font-semibold mb-4">Information</h2>
                <p>Modal content goes here...</p>

                {/* Close button */}
                <button className="mt-4 bg-gray-300 hover:bg-gray-400 px-3 py-1 rounded" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default Age;