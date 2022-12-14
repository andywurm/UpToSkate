import { motion } from "framer-motion"
import search from '../Images/search.png'
import skaters from '../data/SkaterBase'
import DisplaySkaters from '../Components/DisplaySkaters'
import  '../Pages/PageCSS/SkatersStyles.css'
import React, { useState } from "react"

interface IPropsSkaters {
    navColor: boolean
    setNavColor: Function
}

const Skaters = (props: IPropsSkaters) => {

    const [skaterList, setSkaterList] = useState(skaters)
    const [clicked, setClicked] = useState("");
    const [searched, setSearched] = useState("")
    props.setNavColor(true)

    function filterCat(category : string){
        setClicked(category)
        setSkaterList(skaters.filter((sk8r) => sk8r.category === category))
    }

    function goSearch( ){
        console.log(searched)
        setSkaterList(skaters.filter((sk8r) => sk8r.name.toLowerCase().includes(searched.toLowerCase())))
    }

    function handleEnter(event: React.KeyboardEvent<HTMLImageElement>){
        console.log("here")
        if (event.key === 'Enter') {
            setSkaterList(skaters.filter((sk8r) => sk8r.name.toLowerCase().includes(searched.toLowerCase())))
          }
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="SearchArea">

                <div className="Search">Search for a Skater</div>
                <div className="Type">Try typing in a name to view their information</div>

                <div className="actualSearchArea">
                    <div className="first">
                       <img className="magnify" onClick={() => goSearch()} src={search} alt="" /> 
                    </div>
                    <div className="second" onKeyPress={handleEnter}>
                        <input className="inputBar" onChange={(e) => setSearched(e.target.value)} placeholder=' Type Here...' />
                    </div>
                </div>

            </div>

            <div className="DisplayArea">

                <div className="side">
                    <ul className="theList">
                        <li className={clicked === "Mens" ? "active men" : "men"} onClick={(e) => filterCat("Mens")}>Mens</li>
                        <li className={clicked === "Womens" ? "active women" : "women"} onClick={(e) => filterCat("Womens")}>Womens</li>
                        <li className={clicked === "Pairs" ? "active pair" : "pair"} onClick={(e) => filterCat("Pairs")}>Pairs</li>
                        <li className={clicked === "Ice Dance" ? "active dance" : "dance"} onClick={(e) => filterCat("Ice Dance")}>Ice Dance</li>
                    </ul>
                </div>

                <div className="SkaterDisplay">
                   <DisplaySkaters skaters={skaterList}/>
                </div>

            </div>

        </motion.div>
    )
}
export default Skaters;