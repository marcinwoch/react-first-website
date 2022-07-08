function Card(props) {
    return (
        <div className="card">
            <img src={props.imgSrc} alt={props.imgAlt} />
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <a href={props.link} className="btn-read-more">Read more</a>
        </div>
    )
}

export default Card;