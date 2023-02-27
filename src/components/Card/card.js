import "./card.css"

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.image} alt={""} className='card-image' />
            <div className="card-content">
                <h1 className="card-title"> {props.title}</h1>
                <p className="card-category">{props.category}</p>
                <p className="card-description">{props.description}</p>
                <p className="card-discount">{props.discountPercentage}</p>
                <p className="card-price">{props.price}</p>
                <button onClick={props.handleDelete}>Delete</button>
            </div>
        </div>
    )
}

export default Card;