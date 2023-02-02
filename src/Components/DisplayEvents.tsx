import { useState } from "react";
import { Event } from '../data/EventBase';
import '../Pages/PageCSS/EventStyles.css'

interface IPropsEvents{
    event: Event[]
}

const DisplayEvents = (props : IPropsEvents) => {
    
    return(
        <div>
            {props.event.map((e) => {
                return(
                    <div className="eventBorder">
                        <div className="inner">
                        <img src={`./../img/${e.img}`} alt='Event' className="image"/>
                        </div>
                    </div>)
            })}
        </div>
    )
}
export default DisplayEvents;
