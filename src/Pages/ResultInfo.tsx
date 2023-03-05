import { motion } from "framer-motion";
import { Event } from "../data/EventBase";

interface IPropsResultInfo {
    navColor: boolean
    setNavColor: Function
    eventInformation: Event 
    setEventInformation: Function
}

const ResultInfo = (props: IPropsResultInfo) => {

    props.setNavColor(false)

    return (
        <motion.div

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}

        >
          {props.eventInformation.event}
        </motion.div>
    )
}
export default ResultInfo;