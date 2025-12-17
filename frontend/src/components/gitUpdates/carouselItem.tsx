export default function CarouselItem({title, day}:{title:string, day:number}) {
    return(<>
        <div>
            <h1>{title}</h1>
            <p>{day}</p>
        </div>
    </>)
}