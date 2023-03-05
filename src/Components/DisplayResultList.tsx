import { useNavigate } from 'react-router-dom';
import { Event } from '../data/EventBase';
import '../Pages/PageCSS/EventStyles.css'

interface IPropsEvents {
    event: Event[]
    eventInformation: object
    setEventInformation: Function
}

const DisplayResultList = (props: IPropsEvents) => {

    const navigate = useNavigate();
    
    function handleClick(clicked: Event) {
        props.setEventInformation(clicked)
        navigate('/ResultInfo')
    }

    return (
        <div>

            <div className="eventBorder">
                <div className="eventPageTitle">Past Competitions</div>

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
                                    <button onClick={() => handleClick(e)}>Get Scores</button>
                                </div>

                            </div>

                        </div>)
                })}
            </div>
        </div>
    )
}
export default DisplayResultList;