import { Event } from '../data/EventBase';
import '../Pages/PageCSS/EventStyles.css'
import { Stack } from '@mui/material'

interface IPropsEvents {
    event: Event[]
}

const DisplayEvents = (props: IPropsEvents) => {

    function handleClick(clicked: Event) {
        console.log(clicked)
    }

    return (
        <div>

            <div className="eventBorder">
                <div className="eventPageTitle"> Upcoming Events</div>

                {props.event.map((e) => {
                    return (
                        <div className="eventBorder2">
                            {/* <Stack spacing={1} style={{border: "solid red 1px"}}> */}
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
                            {/* </Stack> */}
                        </div>)
                })}
            </div>
        </div>
    )
}
export default DisplayEvents;
