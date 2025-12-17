import { useEffect, useState } from "react";
import { getUpdates } from "../../connections/gitUpdates";
import CarouselItem from "../../components/gitUpdates/carouselItem";
import "../../styles/gitUpdates.css";

export default function Carousel() {

    const [data, setData] = useState<any[] | null>(null);
    const [index, setIndex] = useState(0);

    useEffect(()=>{
        async function getUpdatesUE() {
            const dataAPI = await getUpdates();
            setData(dataAPI);
        }
        
        getUpdatesUE();
    },[])

    if (data === null) {
    return <p>Carregando...</p>
}

if (!Array.isArray(data)) {
    return <p>Erro ao carregar dados</p>
}

return (

    <div className="carousel-container">
        <button onClick={()=>{setIndex(index-1)}}>-</button>
            {data.map(item => (
                <CarouselItem title={item[index].commit.message}/>
            ))}
        <button onClick={()=>{setIndex(index+1)}}>+</button>
    </div>
)
}