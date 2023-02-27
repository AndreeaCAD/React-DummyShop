import { useState, useEffect, useRef } from "react";
import { getPaginatedComments } from "../services/api";
import CommentsCard from "../components/commentsCard/commentsCard";

function Comments() {
  const [comments, setComments] = useState([]);
  const [pageNo, setPageNo] = useState(0);

  const totalComments = useRef();
  const buttonRef = useRef();

  const pageQty = 10;

  useEffect(() => {
    getPaginatedComments(pageNo, pageQty)
      .then((data) => {
        setComments(data.comments);
        if (!totalComments.current) totalComments.current = data.total;
      })
      .catch((error) => console.log(error));
  }, [pageNo]);

  const handlePrev = () => {
    setPageNo((state) => state - 1);
  };

  const handleNext = () => {
    setPageNo((state) => state + 1);
  };

  console.log(comments);

  return (
    <div>
      <div className="pagination-control">
        <button onClick={handlePrev} ref={buttonRef} disabled={pageNo === 0}>
          Prev
        </button>
        <div className="pagination-display">{`${pageNo + 1}/${Math.ceil(
          totalComments.current / pageQty
        )}`}</div>
        <button
          onClick={handleNext}
          disabled={pageNo === totalComments.current / pageQty - 1}
        >
          Next
        </button>
      </div>
      {comments.map((comment) => {
        return (
          <CommentsCard
            key={comment?.id}
            user={comment?.user?.username}
            comment={comment?.body}
            likes={`${comment?.postId} likes`}
          />
        );
      })}
    </div>
  );
}

export default Comments;
