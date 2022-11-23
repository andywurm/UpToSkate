import React from 'react'
import { Skater } from '../data/SkaterBase';
import '../Pages/PageCSS/SkatersStyles.css'

interface IPropsSkaters {
    skaters: Skater[]
}

const DisplaySkaters = (props: IPropsSkaters) => {
    return (
        <div>
            {props.skaters.map((e) => {
                return (
                    <div className="skatePic" style={{ padding: '10px', display: 'inline-block' }}>
                        <img src={`./../img/${e.img}`} style={{ height: '250px', width: '200px', borderRadius: '10px' }} alt="" />
                        <div style={{ padding: '10px', fontWeight: '500', fontSize: '1.2em' }}>{e.name}</div>
                    </div>
                )
            })}

        </div>
    )
}

export default DisplaySkaters;