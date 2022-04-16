import React from 'react';

import 'animate.css';

import { Routes, Route, BrowserRouter } from "react-router-dom"
import About from '../components/About';
import Footer from '../components/Footer';
import Home from '../components/Home';
import Navbar from '../components/ui/Navbar';
import Works from '../components/Works';
import Resume from '../components/Resume';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';



export const AppRouter = () => {
    return (
        <>     
         <BrowserRouter>
       
            <Navbar />
               
                    <Routes>
                        <Route  path="about" element={<About />}/>
                        <Route  path="works" element={<Works />}/>
                        <Route  path="resume" element={<Resume />}/>
                        <Route  path="testimonials" element={<Testimonials />}/>
                        <Route  path="contact" element={<Contact />}/>
                        <Route path="/*" element={<Home />} />
                    </Routes>
                
                </BrowserRouter>

            <Footer/>
        </>
    )
}

