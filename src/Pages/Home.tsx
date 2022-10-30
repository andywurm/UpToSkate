import HomePic from '../Images/HomePic.jpg'
import { motion } from 'framer-motion'

interface IPropsHome{
    navColor : boolean
    setNavColor : Function
}

const Home = (props : IPropsHome) => {
    props.setNavColor(false)
    return (
        <motion.div
        
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}

            style={{
                // border: "solid red 1px",
                height: "85%"
            }}>

            <div style={{ display: "flex", flexDirection: "row", height: "20%" }}> </div>

            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                // border: "solid red 1px",
            }}>

                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: 'left',
                    padding: "0 20px"
                }}>
                    <h1 style={{
                        // border: "solid red 1px",
                        fontWeight: "bolder",
                        fontSize: '2.8em',
                    }}>
                        Keep up with all the latest <br />
                        Figure Skating News <br />
                        <span style={{ color: "#2CA9EF" }}>Now all in one place</span>
                    </h1>
                    <h3 style={{
                        color: "gray",
                        fontWeight: "normal",
                        position: 'relative',
                        top: "-30px"
                    }}>

                        Up to skate always has the up to date information on skaters<br />
                        and competitions. Sign up for our newsletter.</h3>

                    <div style={{
                        display: "flex",
                        flexDirection: 'row',
                        position: "relative",
                        top: "-20px"
                    }}>

                        <div style={{
                            height: "36px",
                            width: "70%",
                            borderRadius: "20px",
                            marginRight: "10px",
                            border: "solid #2CA9EF 1px",
                        }}>
                            <input className='enterEmail' placeholder='Type email here...'
                                style={{
                                    height: "32px",
                                    width: "70%",
                                    marginLeft: "20px",
                                    border: "none",
                                    fontSize: "1.1em"
                                }}>
                            </input>
                        </div>

                        <button className="homeBtn" style={{
                            width: "fit-content",
                            padding: "11px",
                            borderRadius: "20px",
                            backgroundColor: "#2CA9EF",
                            border: "none",
                            color: "white",
                            fontWeight: "bold",
                            fontSize: "1.1em",
                            position: "relative",
                            top: "-3px"
                        }}
                        >Sign Up</button>

                    </div>

                </div>

                <div style={{ display: "flex", flexDirection: "column", }}>
                    <img style={{
                        height: "280px",
                        width: "300px",
                        borderRadius: "50px",
                        padding: "20px",
                        position: "relative",
                        top: "20px"
                    }} src={HomePic} alt="skates" />
                </div>

            </div>

        </motion.div>
    )
}
export default Home;
