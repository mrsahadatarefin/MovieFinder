import React from 'react';
import "./style.scss"
import HeroBanner from './heroBanner/HeroBanner';
import Trending from './trending/Trending';
import Popular from '../../components/popular/Popular';
import TopRating from '../../components/topRating/TopRating';


const Home = () => {
    return (
        <div className='homePage'>
            <HeroBanner/>
            <Trending/>
            <Popular/>
            <TopRating/>
            
        </div>
    );
};

export default Home;