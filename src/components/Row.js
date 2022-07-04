import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { MdOutlineKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { BsFillPlayFill } from 'react-icons/bs';
import { AiOutlinePlus, AiOutlineLike } from 'react-icons/ai';
import '../style/dist/min/row.min.css';

const Row = ({ title, fetchUrl }) => {
    const [movie, setMovie] = useState([]);
    const [sliderNumber, setSliderNumber] = useState(0);
    const [isMoved, setIsMoved] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const req = await axios.get(`https://api.themoviedb.org/3${fetchUrl}`);
                setMovie(req.data.results);
                return req;
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [fetchUrl]);

    const listRef = useRef();

    const handleClick = (direction) => {
        setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x - 50;

        if (direction === 'left' && sliderNumber > 0) {
            setSliderNumber(sliderNumber - 1);
            listRef.current.style.transform = `translateX(${240 + distance}px)`;
        } else if (direction === 'right' && sliderNumber < 15) {
            setSliderNumber(sliderNumber + 1);
            listRef.current.style.transform = `translateX(${-240 + distance}px)`;
        }
    };

    const calculateRating = (rating) => {
        if (rating >= 8) {
            return 'green';
        } else if (rating <= 8 && rating >= 6) {
            return 'orange';
        } else if (rating <= 6) {
            return 'red';
        }
    };

    return (
        <div className='row-container'>
            <div className='row-wrapper'>
                <h1>{title}</h1>
                <div className='posters-container'>
                    <MdOutlineKeyboardArrowLeft
                        className='slider-arrow left'
                        onClick={() => handleClick('left')}
                        style={{ display: !isMoved && 'none' }}
                    />
                    <div className='posters-wrapper' ref={listRef}>
                        {movie.map((movie, index) => (
                            <div
                                className='list-item'
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                key={index}
                                style={{ left: isHovered && index * 240 - 50 }}
                            >
                                <img
                                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                                    alt={movie.name}
                                />

                                <div className='info'>
                                    <div className='item-info'>
                                        <div className='icons'>
                                            <BsFillPlayFill className='icon' />
                                            <AiOutlinePlus className='icon' />
                                            <AiOutlineLike className='icon' />
                                        </div>
                                    </div>

                                    <h2>{movie.title ? movie.title : movie.original_title}</h2>

                                    <div className='item-info-more'>
                                        <span className={`matching ${calculateRating(movie.vote_average)}`}>
                                            {movie.vote_average} Popularity
                                        </span>
                                        <span className='adult'>{movie.adult ? '18+' : '16+'}</span>
                                        <span className='seasons'>{movie.release_date}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <MdKeyboardArrowRight
                        className='slider-arrow right'
                        onClick={() => handleClick('right')}
                    />
                </div>
            </div>
        </div>
    );
};

export default Row;
