import HomePic from '../Images/HomePic.jpg'
import '../Pages/PageCSS/HomeStyles.css'
import { motion } from 'framer-motion'

interface IPropsHome {
    navColor: boolean
    setNavColor: Function
}

const Home = (props: IPropsHome) => {

    props.setNavColor(false)
    
    return (
        <motion.div

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}

            style={{ height: "85%" }}>

            <div className='empty'> </div>

            <div className='outside'>

                <div className='keep'>
                    
                    <h1 className='text2'>
                        Keep up with all the latest <br />
                        Figure Skating News <br />
                        <span style={{ color: "#2CA9EF" }}>Now all in one place</span>
                    </h1>
                    <h3 className='text1'>
                        Up to skate always has the up to date information on skaters<br />
                        and competitions. Sign up for our newsletter.
                    </h3>

                    <div className='emailBtn'>
                        <div className='plsEmail'>
                            <input className='enterEmail' placeholder='Type email here...' />
                        </div>
                        <button className="homeBtn">Sign Up</button>
                    </div>

                </div>

                <div style={{ display: "flex", flexDirection: "column", }}>
                    <img className='skateImg' src={HomePic} alt="skates" />
                </div>

            </div>

        </motion.div>
    )
}
export default Home;
