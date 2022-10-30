import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import skater from '../Images/skater.png'

interface IPropsNavigation {
    navColor: boolean
}

const Navigation = (props: IPropsNavigation) => {
    return (
        <motion.div

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}

            style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                backgroundColor: props.navColor ? '#5ea6eb' : 'transparent'
                // border: 'solid red 1px'
            }}>

            <div className="Logo" style={{
                verticalAlign: "middle",
                position: "relative",
                top: "10px",
                marginLeft: "20px"
            }}>
                <img src={skater} alt="skate" style={{
                    height: "40px",
                    width: "40px",
                    borderRadius: "15px",
                    padding: "10px",
                }} />
            </div>

            <h1 className="websiteName" style={{
                width: "30%",
                fontWeight: '500',
            }}>
                <NavLink to='/' style={{
                    float: "left",
                    color: props.navColor ? 'white' : "black",
                    textDecoration: "none"
                }}>UpToSkate
                </NavLink>
            </h1>


            <div className="topLinks" style={{
                width: "70%",
                height: "100%",
                fontSize: "1.1em",
                display: "inline-block",
            }}>
                <div style={{ textAlign: "right", marginRight: '20px' }}>
                    <NavLink className="Links" to='/Skaters' style={{ display: "inline-block", padding: "4%", textDecoration: "none", color: props.navColor ? 'white' : "black", }}>Skaters</NavLink>
                    <NavLink className="Links" to='/Events' style={{ display: "inline-block", padding: "4%", textDecoration: "none", color: props.navColor ? 'white' : "black", }}>Events</NavLink>
                    <NavLink className="Links" to='/Results' style={{ display: "inline-block", padding: "4%", textDecoration: "none", color: props.navColor ? 'white' : "black", }}>Results</NavLink>
                    <NavLink className="Links" to='/Media' style={{ display: "inline-block", padding: "4%", textDecoration: "none", color: props.navColor ? 'white' : "black", }}>Media</NavLink>
                </div>
            </div>
        </motion.div>
    )
}
export default Navigation;