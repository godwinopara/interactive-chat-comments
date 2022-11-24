import { useSelector } from "react-redux";
import CommentWrapper from "./CommentWrapper";
import ReplyCommentsWrapper from "./ReplyCommentsWrapper";

const UsersComment = () => {
  const comments = useSelector((state) => state.chat.comments);
  return (
    <>
      {comments.map((comment) => {
        const { id, score, username, image, createdAt, content } = comment;
        return (
          /* =============================================================== */

          <div key={id}>
            <CommentWrapper
              score={score}
              id={id}
              username={username}
              image={image}
              createdAt={createdAt}
              content={content}
            />

            {/* =========================================================== */}

            <div className="comments">
              {comment.replies.map((reply) => {
                return (
                  <ReplyCommentsWrapper
                    key={reply.id}
                    score={reply.score}
                    commentId={id}
                    replyId={reply.id}
                    username={reply.username}
                    image={reply.image}
                    createdAt={reply.createdAt}
                    content={reply.content}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default UsersComment;
