import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './Cards.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { FaStar, FaHeart } from "react-icons/fa";

const Cards = ({ card }) => {
    
    return (
        <div className="card-box">
            <div className=''>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={15}
                    loop={true}
                    // mousewheel={true}
                    cssMode={true}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    navigation={{ clickable: true }}
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    className="swiper-container"
                >
                    {card.imgSrc.map((src, i) => (
                        <SwiperSlide key={i}>
                            <img src={src} className="card-img" />
                            <div className='absolute top-3 right-3 heart-icon'>
                                <FaHeart />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="card-info-flex">
                <p className="card-title">{card.title}</p>
                <div className="card-rating">
                    <FaStar />
                    <p>{card.rating}</p>
                </div>
            </div>
            <p className='text-slate-500'>{card.desc}</p>
            <p className='text-slate-500'>{card.date}</p>
            <p style={{ fontSize: "1rem", color: "var(--black" }}>
                <span style={{ fontWeight: "600" }}>${card.price}</span> night
            </p>
        </div>
    );
};

export default Cards;