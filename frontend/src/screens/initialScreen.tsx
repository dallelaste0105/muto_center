import Carousel from "../containers/gitUpdates/carousel";
import "../../src/styles/initialScreen.css";
import "../../src/styles/global.css"

export default function InitialScreen() {
    return (
        <div className="initialScreen">
            <Carousel></Carousel>
        </div>
    )
}