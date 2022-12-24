import { motion } from "framer-motion";
import { useState } from "react";
import event from '../data/EventBase';

interface IPropsEvents {
    navColor: boolean
    setNavColor: Function
}

const Events = (props: IPropsEvents) => {
    const [eventList, setEventList] = useState(event)
    console.log(eventList)
    props.setNavColor(true)
    return (
        <motion.div

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}

        >Events</motion.div>
    )
}
export default Events;