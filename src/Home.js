import React from 'react'
import { HeroSection } from './components/HeroSection';
import Services from './components/Services';
import Trusted from './components/Trusted';
import FeatureProduct from './components/featureProduct';

export const Home = () => {
    const data = {
        name: "My Store"
    }


    return (
        <>
            <HeroSection myData={data} />
            <FeatureProduct />
            <Services />
            <Trusted />

        </>
    )
};
