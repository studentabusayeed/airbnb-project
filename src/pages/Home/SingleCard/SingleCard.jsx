import React from 'react';
import Cards from '../Cards/Cards';
import '../Cards/Cards.css';

const SingleCard = ({ list }) => {
    return (
        <div className='md:max-w-[1280px]'>
            <div className="grid md:grid-cols-5 grid-cols-1 gap-5">
                {list.map((card, i) => (
                    <Cards card={card} key={i} />
                ))}
            </div>
        </div>
    );
};

export default SingleCard;