import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

const HeroSection = () => {
    return (
        <div className='hero-section-wrapper'>
            <div className='top-bar'>
                <a href='/'>
                    <img
                        src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
                        alt=''
                        className='logo'
                    />
                </a>

                <div className='settings-top-bar'>
                    <select>
                        <option value='English'>English</option>
                        <option value='Hrvatski'>Hrvatski</option>
                    </select>

                    <a href='/register'>
                        <button type='button'>Sign in</button>
                    </a>
                </div>
            </div>

            <div className='middle-section-container'>
                <div className='middle-section-wrapper'>
                    <h1>Unlimited movies, TV shows, and more.</h1>
                    <h3 className='watch-anywhere'>Watch anywhere. Cancel anytime.</h3>
                    <h3 className='ready-to-watch'>
                        Ready to watch? Enter your email to create or restart your membership. Email address
                    </h3>

                    <div className='get-started'>
                        <input type='text' placeholder='Email address' />
                        <button type='button'>
                            Get Started <MdKeyboardArrowRight style={{ fontSize: '2.4rem' }} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
