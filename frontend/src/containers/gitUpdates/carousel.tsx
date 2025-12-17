import { getUpdates } from "../../connections/gitUpdates"

export default function Carousel() {
    return(<>
        <div>
            <button onClick={getUpdates}></button>
        </div>
    </>)
}