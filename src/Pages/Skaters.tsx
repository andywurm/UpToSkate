import { motion } from "framer-motion"
import search from '../Images/search.png'
import { Skater } from '../data/SkaterBase'
import DisplaySkaters from '../Components/DisplaySkaters'
import '../Pages/PageCSS/SkatersStyles.css'
import React, { useEffect, useState } from "react"

interface IPropsSkaters {
    navColor: boolean
    setNavColor: Function
    skaterPerson: object
    setSkaterPerson: Function
}

const Skaters = (props: IPropsSkaters) => {

    const [skaterList, setSkaterList] = useState<Skater[]>([])
    const [currentSkaterList, setCurrentSkaterList] = useState<Skater[]>([])
    const [clicked, setClicked] = useState("");
    const [searched, setSearched] = useState("")
    props.setNavColor(true)

    useEffect(() => {
        fetch("http://localhost:5000/skaters")
            .then(res => res.json())
            .then(data => setSkaterList(data))
    }, [])

    const filterCat = (category: string) => {
        if (category !== "All Skaters") {
            setClicked(category)
            setCurrentSkaterList(skaterList.filter((sk8r) => sk8r.category === category))
        }
        else {
            setCurrentSkaterList(skaterList)
            setClicked("")
        }
    }

    const goSearch = () => {
        setCurrentSkaterList(skaterList.filter((sk8r) => sk8r.name.toLowerCase().includes(searched.toLowerCase())))
    }

    const handleEnter = (event: React.KeyboardEvent<HTMLImageElement>) => {
        if (event.key === 'Enter') {
            setCurrentSkaterList(skaterList.filter((sk8r) => sk8r.name.toLowerCase().includes(searched.toLowerCase())))
        }
    }

    return (
        <motion.div
            initial={{ opacity: .5 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: .5 }}
        >
            <div className="SearchArea">

                <div className="Search">Search for a Skater</div>
                <div className="Type">Try typing in a name to view their information</div>

                <div className="actualSearchArea">
                    <div className="first">
                        <img className="magnify" onClick={() => goSearch()} src={search} alt="" />
                    </div>
                    <div className="second" onKeyPress={handleEnter}>
                        <input className="inputBar noselect" onChange={(e) => setSearched(e.target.value)} placeholder=' Type Here...' />
                    </div>
                </div>

            </div>

            <div className="DisplayArea">

                <div className="side">
                    <ul className="theList">
                        {clicked !== "" ?
                            <li className={clicked === "All Skaters" ? "active all" : "all"} onClick={(e) => filterCat("All Skaters")}>Show All</li>
                            : null}
                        <li className={clicked === "Mens" ? "active men" : "men"} onClick={(e) => filterCat("Mens")}>Mens</li>
                        <li className={clicked === "Womens" ? "active women" : "women"} onClick={(e) => filterCat("Womens")}>Womens</li>
                        <li className={clicked === "Pairs" ? "active pair" : "pair"} onClick={(e) => filterCat("Pairs")}>Pairs</li>
                        <li className={clicked === "Ice Dance" ? "active dance" : "dance"} onClick={(e) => filterCat("Ice Dance")}>Ice Dance</li>
                    </ul>
                </div>

                <div className="SkaterDisplay">
                    <DisplaySkaters skaters={currentSkaterList.length === 0 ? skaterList : currentSkaterList} skaterPerson={props.skaterPerson} setSkaterPerson={props.setSkaterPerson} />
                </div>

            </div>

        </motion.div>
    )
}
export default Skaters;