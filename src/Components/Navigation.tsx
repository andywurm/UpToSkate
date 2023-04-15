import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import skater from '../Images/skater.png'
import './ComponentCSS/Navigation.css'

interface IPropsNavigation {
    navColor: boolean
}

const Navigation = (props: IPropsNavigation) => {
    return (
        <motion.div

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}

            className="motionDiv"
            style={{
                backgroundColor: props.navColor ? '#5ea6eb' : 'transparent'
            }}>

            <div className="LogoContainer">
                <img src={skater} alt="skate" className='sk8img' />
            </div>

            <h1 className="websiteName">
                <NavLink to='/' className='websiteLink' style={{
                    color: props.navColor ? 'white' : "black",
                }}>UpToSkate
                </NavLink>
            </h1>


            <div className="topLinks">
                <div className='linkContainer'>
                    <NavLink className={props.navColor ? "activeLinks" : "Links"} to='/Skaters' style={{ color: props.navColor ? 'white' : "black" }}>Skaters</NavLink>
                    <NavLink className={props.navColor ? "activeLinks" : "Links"} to='/Events' style={{ color: props.navColor ? 'white' : "black" }}>Events</NavLink>
                    <NavLink className={props.navColor ? "activeLinks" : "Links"} to='/Results' style={{ color: props.navColor ? 'white' : "black" }}>Results</NavLink>
                    <NavLink className={props.navColor ? "activeLinks" : "Links"} to='/Media' style={{ color: props.navColor ? 'white' : "black" }}>Media</NavLink>
                </div>
            </div>
        </motion.div>
    )
}
export default Navigation;