import React, { useState, useEffect, useCallback } from 'react';
import '../styles/carouselStyle.css';
import arrowRight from '../assets/icons/arrow_right.png'
import arrowLeft from '../assets/icons/arrow_left.png'

export default function Carousel({ pictures, title }) {
    const [index, setIndex] = useState(0);

    const leftClick = useCallback(() => {
        setIndex(prevIndex => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
    }, [pictures.length]);

    const rightClick = useCallback(() => {
        setIndex(prevIndex => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1));
    }, [pictures.length]);

    useEffect(() => {
        if (index >= pictures.length) {
            setIndex(0);
        }
    }, [pictures, index]);

    if (!pictures || pictures.length === 0) {
        console.log('Image manquante');
        return null;
    }

    const shouldShowNavigation = pictures.length > 1;

    return (
        <figure className="carousel">
            <img
                className="img_carousel"
                src={pictures[index]}
                alt={`Photo n°${index + 1} de "${title}"`}
            />
            {shouldShowNavigation && (
                <NavigateCarousel
                    leftClick={leftClick}
                    rightClick={rightClick}
                    index={index + 1}
                    picturesLength={pictures.length}
                />
            )}
        </figure>
    );
}

function NavigateCarousel({ leftClick, rightClick, index, picturesLength }) {
    return (
        <div className="carousel_navigate">
            <button className="btn_carousel_left" onClick={leftClick}>
                <img src={arrowLeft} alt="Left Arrow" />
            </button>
            <span className="index_carousel">
                {index} / {picturesLength}
            </span>
            <button className="btn_carousel_right" onClick={rightClick}>
                <img src={arrowRight} alt="Right Arrow" />
            </button>
        </div>
    );
}


