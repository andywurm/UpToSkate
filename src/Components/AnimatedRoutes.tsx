import React, { useState } from 'react'
import Skaters from '../Pages/Skaters';
import Events from '../Pages/Events';
import Results from '../Pages/Results';
import Media from '../Pages/Media';
import Home from '../Pages/Home';
import SkaterInfo from '../Pages/SkaterInfo';
import ResultInfo from '../Pages/ResultInfo';
import EventInfo from '../Pages/EventInfo';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

interface IPropsAnimatedRoutes {
    navColor: boolean
    setNavColor: Function
}
const AnimatedRoutes = (props: IPropsAnimatedRoutes) => {

    const location = useLocation();
    const [skaterPerson, setSkaterPerson] = useState({
        name: "string",
        img: "string",
        category: "string",
        partner: "string",
        country: "string",
        DOB: "string",
        height: "string",
        status: "string",
        personalBest: "string",
        achievements: []
    })
    const [eventInformation, setEventInformation] = useState({
        event: "string",
        date: "string",
        img: "string",
        location:" string",
        topMen: [],
        topWomen: [],
        topPairs: [],
        topDancers: [],
        status: "string"
    })

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home navColor={props.navColor} setNavColor={props.setNavColor} />} />
                <Route path="/Skaters" element={<Skaters navColor={props.navColor} setNavColor={props.setNavColor} skaterPerson={skaterPerson} setSkaterPerson={setSkaterPerson} />} />
                <Route path="/Events" element={<Events navColor={props.navColor} setNavColor={props.setNavColor} eventInformation={eventInformation} setEventInformation={setEventInformation}/>} />
                <Route path="/Results" element={<Results navColor={props.navColor} setNavColor={props.setNavColor} eventInformation={eventInformation} setEventInformation={setEventInformation}/>} />
                <Route path="/Media" element={<Media navColor={props.navColor} setNavColor={props.setNavColor} />} />
                <Route path="/EventInfo" element={<EventInfo navColor={props.navColor} setNavColor={props.setNavColor} eventInformation={eventInformation} setEventInformation={setEventInformation} />} />
                <Route path="/ResultInfo" element={<ResultInfo navColor={props.navColor} setNavColor={props.setNavColor} eventInformation={eventInformation} setEventInformation={setEventInformation}/>} />
                <Route path="/SkaterInfo" element={<SkaterInfo navColor={props.navColor} setNavColor={props.setNavColor} skaterPerson={skaterPerson} setSkaterPerson={setSkaterPerson} />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes