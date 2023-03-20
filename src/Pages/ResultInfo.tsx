import { motion } from "framer-motion";
import { Event } from "../data/EventBase";
import '../Pages/PageCSS/ResultStyles.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface IPropsResultInfo {
    navColor: boolean
    setNavColor: Function
    eventInformation: Event
    setEventInformation: Function
}



const ResultInfo = (props: IPropsResultInfo) => {

    props.setNavColor(false)
    // console.log(props.eventInformation.topMen)
    // props.eventInformation.topMen.map((person: { name: any; }) => {
    //     console.log(person.name)
    // })

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

                        <Accordion style={{width: '100%'}} defaultExpanded={true}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography> <div className="cat">Men</div></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <table>
                                        <tr>
                                            <th>Rank</th>
                                            <th>Name</th>
                                            <th>Nation</th>
                                            <th>Points</th>
                                            <th>SP</th>
                                            <th>FS</th>
                                        </tr>
                                      {props.eventInformation.topMen.map((person: any) => {
                                        return(
                                            <tr>
                                                <td>{person.rank}</td>
                                                <td className="sk8Name"> &nbsp;&nbsp; {person.name}</td>
                                                <td>{person.nation}</td>
                                                <td>{person.Points}</td>
                                                <td>{person.sp}</td>
                                                <td>{person.fs}</td>
                                            </tr>
                                        )
                                      })}
                                    </table>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>Accordion 2</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>




                    </div>
                </div>
            </div>
        </motion.div>
    )
}
export default ResultInfo;