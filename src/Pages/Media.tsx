import { motion } from "framer-motion";
import { ImageList, ImageListItem } from "@mui/material"
import media from '../data/MediaBase'
import { useState } from "react";

interface IPropsMedia {
    navColor: boolean
    setNavColor: Function
}

const Media = (props: IPropsMedia) => {

    const [mediaList, setMediaList] = useState(media)
    props.setNavColor(false)
    console.log(mediaList)

    return (
        <motion.div

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}

        >
            <div style={{ padding: "2%", margin: "0 auto" }}>
                <ImageList variant="masonry" cols={3} gap={8} sx={{ width: "0 auto", height: "100%" }} >

                    {mediaList.map(picture => {
                        return (
                            <ImageListItem>
                                <img src={`./../GalleryImg/${picture.mediaName}.png`} alt={'skaters'} />
                            </ImageListItem>
                        )
                    })}

                </ImageList>
            </div>
        </motion.div>
    )
}
export default Media;