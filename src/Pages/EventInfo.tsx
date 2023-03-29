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

            style={{ height: "fit-content", paddingBottom: "50px" }}
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

                    <div className="eventInfoText">
                        {props.eventInformation.event} takes place in {props.eventInformation.location} from {props.eventInformation.date}.
                        <br />
                        Join us as we watch top skaters from all over the world compete for the gold medal. 
                        <br/>Skaters include but are not limited to {props.eventInformation.topMen[0]}, {props.eventInformation.topWomen[0]}, {props.eventInformation.topPairs[0]}, and {props.eventInformation.topDancers[0]}.
                        <br /><br />
                        Click the button below to find out more and to buy tickets!
                        <br /><br />
                        <button>Tickets</button>
                    </div>
                    <br/><br/>


                </div>
            </div>
        </motion.div>
    )
}
export default EventInfo;