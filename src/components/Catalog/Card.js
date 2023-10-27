function Card(props) {
    return (
        <div>
             <div className="h-48 overflow-hidden shadow-md ">
            <img src={props.video.posterUrl} alt={props.video["nameRu"]} data-testid = "cardPoster"/>
                </div>
                <div className="px-4 py-6">
                    <h3 className="text-white text-xl font-bold font-montserrat" data-testid = "title">{props.video["nameRu"]}</h3>
                    <p className="text-yellow-500" data-testid = "genre">{props.video.genres[0].genre} </p>
                </div>
        </div>
    )
            
}

export default Card;