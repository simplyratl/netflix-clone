import React from 'react';
import HeroSection from '../components/HomeUnregistered/HeroSection';
import ListSections from '../components/HomeUnregistered/ListSections';
import '../style/dist/min/homeunregistered.min.css';

const HomeUnregistered = () => {
    return (
        <>
            <HeroSection />
            <ListSections
                title='Enjoy on your TV.'
                description='Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.'
                device='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png'
                video='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v'
                reverse={false}
            />

            <ListSections
                title='Download your shows to watch offline.'
                description='Save your favorites easily and always have something to watch.'
                device='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg'
                video='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v'
                reverse={true}
                type='phone'
            />
            <ListSections
                title='Watch everywhere.'
                description='Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.'
                device='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png'
                video='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v'
                reverse={false}
                type='apple'
            />
        </>
    );
};

export default HomeUnregistered;
