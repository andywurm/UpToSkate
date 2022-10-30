import { motion } from "framer-motion";

interface IPropsResults {
    navColor: boolean
    setNavColor: Function
}

const Results = (props: IPropsResults) => {
    props.setNavColor(true)
    return (
        <motion.div

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}

        >Results</motion.div>
    )
}
export default Results;