import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Header } from '../common/Header';
import { Home } from '../home/Home';
import { About } from '../pages/About';
import { Services } from '../home/Services';
import { Portfolio } from './Portfolio';
import { Testimonials } from './Testimonials';
import { Blog } from './Blog';
import { Contact } from './Contact';
import { Footer } from '../common/Footer';

export const Pages = () => {
    return (

        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="services" element={<Services />} />
                <Route path="portfolio" element={<Portfolio />} />
                <Route path="testimonials" element={<Testimonials />} />
                <Route path="blog" element={<Blog />} />
                <Route path="contact" element={<Contact />} />
            </Routes>
            <Footer />
        </BrowserRouter>

    )
}
