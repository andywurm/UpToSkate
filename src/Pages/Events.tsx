import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import DisplayEvents from "../Components/DisplayEvents";
// import event from '../data/EventBase';

interface IPropsEvents {
    navColor: boolean
    setNavColor: Function
    eventInformation: object
    setEventInformation: Function
}

const Events = (props: IPropsEvents) => {

    const [eventList, setEventList] = useState([])
    props.setNavColor(false)

    useEffect(() => {
        fetch("http://localhost:5000/events/future")
            .then(res => res.json())
            .then(data => setEventList(data))
    }, [])

    return (
        <motion.div
            initial={{ opacity: .5 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: .5 }}
        >
            <DisplayEvents event={eventList} eventInformation={props.eventInformation} setEventInformation={props.setEventInformation} />
        </motion.div>
    )
}
export default Events;