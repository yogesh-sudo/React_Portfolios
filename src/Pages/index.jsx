import React from 'react'
import Home from './Home'
import Navbar from '../Parts/Navbar'
import Top_navbar from '../Parts/Top_navbar'
import {Routes, Route,Navigate } from "react-router-dom";
import About from './About';
import Footer from '../Parts/Footer';
import Contact from './Contact';
import Deals from './Deals';
import Categories from './Categories';
import Auction_details from './Auction_details';
import Winner from './Winner';
import Faqs from './Faqs';
import Privacy from './Privacy';
import Signin from './Signin';
import Signup from './Signup';
import Terms from './Terms';
import NotFound from "./NotFound";
import Blog from './Blog';
import Blog_single from './Blog_single';
const Index = () => {
    return (
        <>
        <div id="sticky-header"></div>
            <Top_navbar/>
            <Navbar/>   
             {/* <Home/>         */}
            <Routes>        
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/> 
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/deals" element={<Deals/>}/>
                <Route path="/categories" element={<Categories/>}/>
                <Route path="/auction_details" element={<Auction_details/>}/>
                <Route path="/winner" element={<Winner/>}/>
                <Route path="/faqs" element={<Faqs/>}/>
                <Route path="/privacy" element={<Privacy/>}/>
                <Route path="/signin" element={<Signin/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/terms" element={<Terms/>}/>
                <Route path="/blog" element={<Blog/>}/>
                <Route path="/blog_single" element={<Blog_single/>}/>
                {/* Any for your choice */}
                <Route path="*" element={ <NotFound/>} />
                {/* <Route path="/" element={<Navigate replace to="/url" />} /> */}
                {/* <Route path="/" element={<Navigate replace to="/url" /> && <element/>} /> */}

            </Routes>
            <Footer/>
        </>
    )
}

export default Index
