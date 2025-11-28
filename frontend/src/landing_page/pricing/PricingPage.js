import React from 'react';
import Hero from './Hero';
import Brojkerage from './Brojkerage';
import Footer from '../Footer';
import Navbar from '../Navbar';
import OpenAccount from '../OpenAccount';
function PricingPage() {
    return ( 
        <>
        <Navbar />
       <Hero/>
       <OpenAccount/>
       <Brojkerage/>
        <Footer />
       </>
     );
}

export default PricingPage;