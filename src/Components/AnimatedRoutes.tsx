import React from 'react'
import Skaters from '../Pages/Skaters';
import Events from '../Pages/Events';
import Results from '../Pages/Results';
import Media from '../Pages/Media';
import Home from '../Pages/Home';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/Skaters" element={<Skaters />} />
                <Route path="/Events" element={<Events />} />
                <Route path="/Results" element={<Results />} />
                <Route path="/Media" element={<Media />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes