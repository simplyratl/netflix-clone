import React from 'react';
import requests from '../api/requests';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import Row from '../components/Row';
import '../style/dist/min/home.min.css';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />

            <div className='rows'>
                {/* <Row title='Latest' fetchUrl={requests.fetchLatest} /> */}
                <Row title='Popular Movies' fetchUrl={requests.fetchTopRated} />
                <Row title='Trending' fetchUrl={requests.fetchTrending} />
                <Row title='Netlix Originals' fetchUrl={requests.fetchNetflixOriginals} />
            </div>
        </div>
    );
};

export default Home;
