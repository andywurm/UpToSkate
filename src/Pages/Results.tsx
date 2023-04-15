import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import DisplayResultList from "../Components/DisplayResultList"

interface IPropsResults {
    navColor: boolean
    setNavColor: Function
    eventInformation: object
    setEventInformation: Function
}

const Results = (props: IPropsResults) => {

    props.setNavColor(false)
    const [eventList, setEventList] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/events/past")
        .then(res => res.json())
        .then(data => setEventList(data))
    },[])
    
    return (
        <motion.div
            initial={{ opacity: .5 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: .5 }}
        >
            <DisplayResultList event={eventList} eventInformation={props.eventInformation} setEventInformation={props.setEventInformation} />
        </motion.div>
    )
}
export default Results;