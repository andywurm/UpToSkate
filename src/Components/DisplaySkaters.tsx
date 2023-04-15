import { Skater } from '../data/SkaterBase'
import './ComponentCSS/DisplaySkaters.css'
import { Paper } from '@mui/material'
import { useNavigate } from 'react-router-dom'

interface IPropsSkaters {
    skaters: Skater[]
    skaterPerson: object
    setSkaterPerson: Function
}

const DisplaySkaters = (props: IPropsSkaters) => {

    const navigate = useNavigate();

    const handleClick = (person: Skater) => {
        props.setSkaterPerson(person)
        navigate("/SkaterInfo")
    }

    return (
        <div className='dsContainer'>
            {props.skaters.map((e) => {
                return (
                    <div className="skatePic headshot" onClick={() => handleClick(e)}>
                        <Paper elevation={2}>
                            <img src={`./../img/${e.img}`} className="skaterImg" alt="" />
                            <div className='skaterName'>{e.name}</div>
                        </Paper>
                    </div>
                )
            })}
        </div>
    )
}

export default DisplaySkaters;