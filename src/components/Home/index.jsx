import React from "react";
import Header from '../../components/Header'
import Section1 from '../../components/section-1';
import Section2 from '../../components/section-2';
import Section3 from '../../components/section-3';
import Section4 from '../../components/section-4';
import Section5 from '../../components/section-5';
import Section6 from '../../components/section-6';
import Section7 from '../../components/section-7';
import Footer from '../../components/Footer';

const Home = () => {
    return(
        <>
         <Header/> 
     <Section1/>
   <Section2/>
    <Section3/> 
    <Section4/>
    <Section5/>
    <Section6/>
    <Section7/> 
    <Footer/>
        </>
    )
}

export default Home;