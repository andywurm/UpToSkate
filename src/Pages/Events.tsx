import { motion } from "framer-motion";
import { useState } from "react";
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
    return (
        <motion.div

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}

        >
            <DisplayEvents event={eventList}/>
        </motion.div>
    )
}
export default Events;