
import { motion } from "framer-motion";
import { Skater } from "../data/SkaterBase";
import '../Pages/PageCSS/SkaterInfoStyles.css'

interface IPropsSkaterInfo {
    navColor: boolean
    setNavColor: Function
    skaterPerson: Skater
    setSkaterPerson: Function
}

const SkaterInfo = (props: IPropsSkaterInfo) => {

    props.setNavColor(false)

    return (
        <motion.div

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}

        >
            <div style={{ width: "70%", margin: "0 auto"}}>
                <div className="ProfileContainer">

                    <div className="ProfileImg">
                            <img src={`./../img/${props.skaterPerson.img}`} alt={'skater'} className="ProfilePic" />
                        <div style={{ marginTop: "10px", fontSize: "1.1em" }}>
                            <b>Status</b> : {props.skaterPerson.status === 'active' ? 'Active' : 'Retired'}
                        </div>

                    </div>

                    <div className="ProfileInfo">

                        <div className="ProfileName">
                            {props.skaterPerson.name}
                        </div>

                        <div className="ProfileList">
                            <b>Country</b> : {props.skaterPerson.country}
                        </div>

                        <div className="ProfileList">
                            <b>Date of Birth</b> : {props.skaterPerson.DOB}
                        </div>

                        <div className="ProfileList">
                            <b>Height</b> : {props.skaterPerson.height}
                        </div>

                        <div className="ProfileList">
                            <b>Personal Best</b> : {props.skaterPerson.personalBest}
                        </div>

                        <div className="ProfileList">
                            <b>Achievements</b> :
                            {props.skaterPerson.achievements.map(item => {
                                return (
                                    <div style={{ padding: "5px 0" }}>{item}</div>
                                )
                            })}
                        </div>

                    </div>
                </div>
            </div>

        </motion.div>
    )
}
export default SkaterInfo;