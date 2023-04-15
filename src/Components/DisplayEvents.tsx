import { Event } from '../data/EventBase';
import '../Pages/PageCSS/EventStyles.css'
import { Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom';

interface IPropsEvents {
    event: Event[]
    eventInformation: object
    setEventInformation: Function
}

const DisplayEvents = (props: IPropsEvents) => {

    const navigate = useNavigate();
    
    const handleClick = (clicked: Event) => {
        props.setEventInformation(clicked)
        navigate('/EventInfo')
    }

    return (
        <div>

            <div className="eventBorder">

                <div className="eventPageTitle"> Upcoming Events</div>

                {props.event.map((e) => {
                    return (
                        <div className="eventBorder2">
                            
                            <div className='inner'>

                                <div className="eventImage">
                                    <img src={`./../img/${e.img}`} alt='Event' className="image" />
                                </div>

                                <div className="eventInfo">
                                    <div className="eventName">{e.event}</div>
                                    <div className="otherInfo">
                                        <div>{e.location}</div>
                                        <div>{e.date}</div>
                                    </div>
                                </div>

                                <div className="eventButton">
                                    <button onClick={() => handleClick(e)}>More Info</button>
                                </div>

                            </div>
                           
                        </div>)
                })}
                
            </div>

        </div>
    )
}
export default DisplayEvents;
