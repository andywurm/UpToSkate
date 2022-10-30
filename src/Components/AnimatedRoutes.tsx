import React from 'react'
import Skaters from '../Pages/Skaters';
import Events from '../Pages/Events';
import Results from '../Pages/Results';
import Media from '../Pages/Media';
import Home from '../Pages/Home';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

interface IPropsAnimatedRoutes{
    navColor : boolean
    setNavColor : Function
}
const AnimatedRoutes = (props : IPropsAnimatedRoutes) => {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home navColor={props.navColor} setNavColor={props.setNavColor}/>}/>
                <Route path="/Skaters" element={<Skaters navColor={props.navColor} setNavColor={props.setNavColor}/>} />
                <Route path="/Events" element={<Events navColor={props.navColor} setNavColor={props.setNavColor}/>} />
                <Route path="/Results" element={<Results navColor={props.navColor} setNavColor={props.setNavColor}/>} />
                <Route path="/Media" element={<Media />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes