import "../../styles/gitUpdates.css"
import {motion} from "framer-motion"

export default function CarouselItem({title}:{title:string}) {
    return(<>
        <motion.div className="carousel-card"
            initial={{}}
            animate={{zoom:1.1}}
            transition={{duration:0.2}}
        >
            <p>{title}</p>
        </motion.div>
    </>)
}