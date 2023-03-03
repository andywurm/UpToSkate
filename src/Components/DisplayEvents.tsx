import { Event } from '../data/EventBase';
import '../Pages/PageCSS/EventStyles.css'

interface IPropsEvents{
    event: Event[]
}

const DisplayEvents = (props : IPropsEvents) => {
    
    return(
        <div>
            
            <div className="eventBorder">
            <div className="eventPageTitle"> Upcoming Events</div>

            {props.event.map((e) => {
                return(
                    <div className="eventBorder2">
                        <div className="inner">

                            <div className="eventImage">
                            <img src={`./../img/${e.img}`} alt='Event' className="image"/>
                            </div>

                            <div className="eventInfo">
                                <div className="eventName">{e.event}</div>
                                <div className="otherInfo">
                                    <div>{e.location}</div>
                                    <div>{e.date}</div>
                                </div>
                            </div>

                            <div className="eventButton">
                                <button>More Info</button>
                            </div>
    
                        </div>
                    </div>)
            })}
            </div>
        </div>
    )
}
export default DisplayEvents;
