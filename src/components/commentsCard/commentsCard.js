import "./commentsCard.css";

const CommentsCard = (props) => {
    return (
        <div className="comments-card">
            <p className="comment-user-name">{props.user}</p>
            <p className="comment-body">{props.comment}</p>
            <div className="likes">{props.likes}</div>
        </div>
    )
}

export default CommentsCard;