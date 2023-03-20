import { motion } from "framer-motion";
import { Event } from "../data/EventBase";
import '../Pages/PageCSS/ResultStyles.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from "react";

interface IPropsResultInfo {
    navColor: boolean
    setNavColor: Function
    eventInformation: Event
    setEventInformation: Function
}



const ResultInfo = (props: IPropsResultInfo) => {

    props.setNavColor(false)
    const [expanded, setExpanded] = React.useState<string | false>('panel1');

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };


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

                        <Accordion style={{ width: '100%' }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
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
                                            return (
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

                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography><div className="cat">Women</div></Typography>
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
                                        {props.eventInformation.topWomen.map((person: any) => {
                                            return (
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

                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3a-content"
                                id="panel3a-header"
                            >
                                <Typography><div className="cat">Pairs</div></Typography>
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
                                        {props.eventInformation.topPairs.map((person: any) => {
                                            return (
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

                        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel4a-content"
                                id="panel4a-header"
                            >
                                <Typography><div className="cat">Ice Dance</div></Typography>
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
                                        {props.eventInformation.topDancers.map((person: any) => {
                                            return (
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


                    </div>
                </div>
            </div>
        </motion.div>
    )
}
export default ResultInfo;