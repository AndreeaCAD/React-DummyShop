import "./userCard.css"

const UserCard = (props) => {
    return(
        <div className="user-card">
            <img src={props.image} alt={""} className="user-image" />
            <div>
                <p className="full-name">{props.fullName}</p>
                <p className="maiden-name">{'(' + props.maidenName + ')'}</p>
                <a className="email" href={`mailto:${props.email}`}>{props.email}</a>
                <div>
                    <p className="address">{props.address}</p>
                    <p className="city">{props.city}</p>

                </div>
            </div>

        </div>
    )
}

export default UserCard;