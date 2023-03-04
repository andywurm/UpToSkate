import { motion } from "framer-motion";
// https://mui.com/material-ui/react-image-list/

const Media = () => {
    return (
        <motion.div

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}

        >Media</motion.div>
    )
}
export default Media;