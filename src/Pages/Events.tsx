import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import DisplayEvents from "../Components/DisplayEvents";
import event from '../data/EventBase';

interface IPropsEvents {
    navColor: boolean
    setNavColor: Function
}

const Events = (props: IPropsEvents) => {

    const [eventList, setEventList] = useState(event)
    console.log(eventList)
    props.setNavColor(false)

    useEffect(() => {
        fetch("http://localhost:5000/events")
        .then(res => res.json())
        .then(data => console.log(data))
    },[])

    return (
        <motion.div

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}

        >
            <DisplayEvents event={eventList.filter(e => e.status === 'Future')}/>
        </motion.div>
    )
}
export default Events;