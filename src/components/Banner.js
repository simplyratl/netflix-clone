import React, { useEffect, useState } from 'react';
import '../style/dist/min/banner.min.css';
import { ReactComponent as PlayIcon } from '../assets/icons/play-icon.svg';
import { ReactComponent as InfoIcon } from '../assets/icons/info-icon.svg';
import requests from '../api/requests';
import axios from '../api/axios';

const Banner = () => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const req = await axios.get(`https://api.themoviedb.org/3${requests.fetchTrending}`);

                setMovie(req.data.results[0]);
                setMovie(req.data.results[Math.floor(Math.random() * req.data.results.length - 1)]);

                return req;
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    console.log(movie);

    return (
        <section
            className='banner'
            style={{
                backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie && movie.backdrop_path}'`,
                backgroundPosition: 'center center',
            }}
        >
            <div className='banner-contents'>
                <div className='banner-left-side'>
                    <h1 className='banner-title'>{movie && movie.title ? movie.title ? movie.title : movie.original_title : null}</h1>

                    <p className='banner-description'>{movie && movie.overview}</p>

                    <div className='banner-buttons'>
                        <button className='banner-button play'>
                            <div className='banner-button-inner'>
                                <PlayIcon className='banner-button-icon' style={{ padding: 1.5 }} />
                                Play
                            </div>
                        </button>
                        <button className='banner-button more-info'>
                            <div className='banner-button-inner'>
                                <InfoIcon className='banner-button-icon' />
                                More info
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            <div className='banner-fade'></div>
        </section>
    );
};

export default Banner;
