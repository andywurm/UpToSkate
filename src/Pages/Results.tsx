import { motion } from "framer-motion";
import { useState } from "react";
import event from '../data/EventBase';
import DisplayResultList from "../Components/DisplayResultList"

interface IPropsResults {
    navColor: boolean
    setNavColor: Function
    eventInformation: object
    setEventInformation: Function
}

const Results = (props: IPropsResults) => {

    props.setNavColor(false)
    const [eventList, setEventList] = useState(event)
    
    return (
        <motion.div

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}

        >
            <DisplayResultList event={eventList.filter(e => e.status === 'Past')} eventInformation={props.eventInformation} setEventInformation={props.setEventInformation} />
        </motion.div>
    )
}
export default Results;