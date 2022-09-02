import { NavLink } from 'react-router-dom';
import skater from '../Images/skater.png'

const Navigation = () => {
    return (
        <div style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
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
                    padding: "10px"
                }} />
            </div>

            <h1 className="websiteName" style={{
                width: "50%",
                fontWeight: '500'
            }}>
                <NavLink to='/' style={{ float: "left", color: "black", textDecoration: "none" }}>UpToSkate</NavLink>
            </h1>

            <div className="topLinks" style={{
                width: "50%",
                height: "100%",
                fontSize: "1.1em",
                display: "inline-block",
            }}>
                <div style={{ textAlign: "right", marginRight: '20px' }}>
                    <NavLink className="Links" to='/Skaters' style={{ display: "inline-block", padding: "4%", textDecoration: "none" }}>Skaters</NavLink>
                    <NavLink className="Links" to='/Events' style={{ display: "inline-block", padding: "4%", textDecoration: "none" }}>Events</NavLink>
                    <NavLink className="Links" to='/Results' style={{ display: "inline-block", padding: "4%", textDecoration: "none" }}>Results</NavLink>
                    <NavLink className="Links" to='/Media' style={{ display: "inline-block", padding: "4%", textDecoration: "none" }}>Media</NavLink>
                </div>
            </div>

        </div>
    )
}
export default Navigation;