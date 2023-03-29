import { motion } from "framer-motion";
import { Event } from "../data/EventBase";
import './PageCSS/EventInfoStyles.css'

interface IPropsEventInfo {
    navColor: boolean
    setNavColor: Function
    eventInformation: Event
    setEventInformation: Function
}

const EventInfo = (props: IPropsEventInfo) => {

    props.setNavColor(false)

    return (
        <motion.div

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}

            style={{ height: "75vh", paddingBottom: "50px" }}
        >
            <div className="outsideEventInfo">
                <div className="EventInfo">

                    <div className="eventInformation">

                        <div className="eventImg">
                            <img src={`./../img/${props.eventInformation.img}`} alt='Event' className="eventIm" />
                        </div>

                        <div className="eventSpecifics">
                            <div className="eventInfoName">{props.eventInformation.event}</div>
                            <div className="eventInfoLocation">{props.eventInformation.location}</div>
                            <div className="eventInfoDate">{props.eventInformation.date}</div>
                        </div>

                    </div>

                </div>
            </div>
        </motion.div>
    )
}
export default EventInfo;