import { motion } from "framer-motion";
import { Event } from "../data/EventBase";
import '../Pages/PageCSS/ResultStyles.css'
import gold from '../Images/goldM.png'
import silver from '../Images/silverM.png'
import bronze from '../Images/bronzeM.png'

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

            style={{ height: "fit-content", paddingBottom: "50px" }}
        >


            <div className="outsideContainer">
                <div className="resultContainer">

                    <div className="outerHeader">
                        <div className="headerImage">
                            <img src={`./../img/${props.eventInformation.img}`} alt='Event' className="rImage" />
                        </div>
                        <div className="headerInfo">
                            <div className="eventRName">{props.eventInformation.event}</div>
                            <div className="eventRLocation">{props.eventInformation.location}</div>
                            <span style={{ fontWeight: '400', fontSize: '1.1em' }}>Final Results</span>
                        </div>
                    </div>

                    <div className="resultSection">
                        <div className="results">
                            <div className="cat">Men :</div> {props.eventInformation.topMen.map((man, i = 0) => {
                                if (i === 0) {
                                    return (
                                        <div className="displayMen">
                                            <img src={gold} alt="Gold" className="gold" /> {man}   </div>
                                    )
                                }
                                else if (i === 1) {
                                    return (
                                        <div className="displayMen">
                                            <img src={silver} alt="Silver" className="silver" /> {man}   </div>
                                    )
                                }
                                else {
                                    return (
                                        <div className="displayMen">
                                            <img src={bronze} alt="Bronze" className="bronze" /> {man}   </div>
                                    )
                                }
                            })}
                        </div>

                        <div className="results">
                            <div className="cat">Women :</div> {props.eventInformation.topWomen.map((woman, i = 0) => {
                                if (i === 0) {
                                    return (
                                        <div className="displayWomen">
                                            <img src={gold} alt="Gold" className="gold" /> {woman}   </div>
                                    )
                                }
                                else if (i === 1) {
                                    return (
                                        <div className="displayWomen">
                                            <img src={silver} alt="Silver" className="silver" /> {woman}  </div>
                                    )
                                }
                                else {
                                    return (
                                        <div className="displayWomen">
                                            <img src={bronze} alt="Bronze" className="bronze" /> {woman}   </div>
                                    )
                                }
                            })}
                        </div>

                        <div className="results">
                            <div className="cat">Pairs :</div>  {props.eventInformation.topPairs.map((pair, i = 0) => {
                                if (i === 0) {
                                    return (
                                        <div className="displayPair">
                                            <img src={gold} alt="Gold" className="gold" /> {pair}   </div>
                                    )
                                }
                                else if (i === 1) {
                                    return (
                                        <div className="displayPair">
                                            <img src={silver} alt="Silver" className="silver" /> {pair}   </div>
                                    )
                                }
                                else {
                                    return (
                                        <div className="displayPair">
                                            <img src={bronze} alt="Bronze" className="bronze" /> {pair}   </div>
                                    )
                                }
                            })}
                        </div>

                        <div className="results">
                            <div className="cat">Ice Dance :</div>  {props.eventInformation.topDancers.map((dancer, i = 0) => {
                                if (i === 0) {
                                    return (
                                        <div className="displayDance">
                                            <img src={gold} alt="Gold" className="gold" /> {dancer}   </div>
                                    )
                                }
                                else if (i === 1) {
                                    return (
                                        <div className="displayDance">
                                            <img src={silver} alt="Silver" className="silver" /> {dancer}   </div>
                                    )
                                }
                                else {
                                    return (
                                        <div className="displayDance">
                                            <img src={bronze} alt="Bronze" className="bronze" /> {dancer}   </div>
                                    )
                                }
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </motion.div>
    )
}
export default ResultInfo;