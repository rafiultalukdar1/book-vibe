import React from 'react';
import Banner from '../../components/Banner/Banner';
import Books from '../Books/Books';

const HomePage = () => {
    return (
        <>
            <div className='py-[50px] md:py-[70px]'>
                <Banner></Banner>
                <Books></Books>
            </div>
        </>
    );
};

export default HomePage;