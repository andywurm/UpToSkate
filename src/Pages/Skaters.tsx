import { motion } from "framer-motion"
import search from '../Images/search.png'
import skaters from '../data/SkaterBase'
import DisplaySkaters from '../Components/DisplaySkaters'
import { useState } from "react"

interface IPropsSkaters {
    navColor: boolean
    setNavColor: Function
}
const Skaters = (props: IPropsSkaters) => {
    const [skaterList, setSkaterList] = useState(skaters)
    const [searched, setSearched] = useState("")
    props.setNavColor(true)

    function filterCat(category : string){
        setSkaterList(skaters.filter((sk8r) => sk8r.category === category))
    }

    function goSearch(){
        console.log(searched)
        setSkaterList(skaters.filter((sk8r) => sk8r.name.toLowerCase().includes(searched.toLowerCase())))
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="Search Area" style={{height: "400px",
                backgroundColor: '#5ea6eb',
                position: 'relative',}}>

                <div style={{ paddingTop: '100px', fontSize: '2.5em', fontWeight: '600', color: 'white' }}>Search for a Skater</div>
                <div style={{ paddingTop: '10px', color: '#d3eaf2', fontWeight: '500', marginBottom: '3%' }}>Try typing in a name to view their information</div>

                <div style={{
                    // border: 'solid red 1px',
                    backgroundColor: 'white',
                    borderRadius: '20px',
                    height: '10%',
                    width: '45%',
                    display: 'flex',
                    flexDirection: 'row',
                    margin: '0 auto'
                }}>
                    <div style={{
                        flexDirection: 'column', flexBasis: '10%',
                        // border: 'solid pink 1px' 
                    }}>
                       <img onClick={() => goSearch()} src={search} style={{ height: '70%', marginTop: '5px' }} alt="" /> 
                    </div>
                    <div style={{
                        flexDirection: 'column', flexBasis: '90%',
                        // border: 'solid pink 1px'
                    }}>
                        <input onChange={(e) => setSearched(e.target.value)} placeholder=' Type Here...' style={{ width: '97%', height: '95%', borderStyle: 'none', borderRadius: '15px', fontSize: '1.2em', }} />
                    </div>
                </div>

            </div>

            <div className="Display Area" style={{
                display: 'flex',
                flexDirection: 'row',
                // border: 'solid red 1px',
                width: '95%',
                marginTop: '5%',
                marginBottom:'5%',
                margin: '0 auto',
                height: '100%'
            }}>
                <div style={{
                    flexDirection: 'column',
                    flexBasis: '20%',
                    // border: 'solid pink 1px'
                }}>
                    <ul style={{ listStyle: 'none', textAlign: 'left', fontWeight: '500', fontSize: '1.3em', lineHeight: '200%' }}>
                        <li onClick={(e) => filterCat("Mens")}>Mens</li>
                        <li onClick={(e) => filterCat("Womens")}>Womens</li>
                        <li onClick={(e) => filterCat("Pairs")}>Pairs</li>
                        <li onClick={(e) => filterCat("Ice Dance")}>Ice Dance</li>
                    </ul>
                </div>
                <div style={{
                    flexDirection: 'column',
                    flexBasis: '80%',
                    // border: 'solid pink 1px'
                }}>
                   <DisplaySkaters skaters={skaterList}/>
 
                </div>
            </div>

        </motion.div>
    )
}
export default Skaters;