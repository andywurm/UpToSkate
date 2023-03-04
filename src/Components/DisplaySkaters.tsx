import React from 'react'
import { Skater } from '../data/SkaterBase'
import '../Pages/PageCSS/SkatersStyles.css'
import { Paper } from '@mui/material'

interface IPropsSkaters {
    skaters: Skater[]
}

const DisplaySkaters = (props: IPropsSkaters) => {

    function handleClick(person : Skater){
        console.log(person)
    }

    return (
        <div>
            {props.skaters.map((e) => {
                return (
                    <div className="skatePic" style={{ padding: '6px', display: 'inline-block' }}  onClick={() => handleClick(e)}>
                    <Paper elevation={2}> 
                        <img src={`./../img/${e.img}`} style={{ height: '250px', width: '200px', borderRadius: '6px', padding: '3px' }} alt="" />
                        <div style={{ padding: '10px', fontWeight: '500', fontSize: '1.2em' }}>{e.name}</div>
                    </Paper>
                    </div>
                    
                )
            })}

        </div>
    )
}

export default DisplaySkaters;