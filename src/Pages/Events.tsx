import { motion } from "framer-motion";

interface IPropsEvents {
    navColor: boolean
    setNavColor: Function
}

const Events = (props: IPropsEvents) => {
    props.setNavColor(true)
    return (
        <motion.div

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}

        >Events</motion.div>
    )
}
export default Events;