import React from 'react';

import Hero from '../Hero';
import Categories from '../Categories';

import asset_home from './../../../assets/videos/online-learning.mp4';

const Home = () => {
    return (
        <React.Fragment>
            <Hero video={asset_home}/>
            <Categories/>
        </React.Fragment>
    );
};

export default Home;