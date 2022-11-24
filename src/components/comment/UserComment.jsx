import { useSelector } from "react-redux";
import Comment from "./Comment";
import RepliesScore from "./RepliesScore";
import Score from "./Score";

const UsersComment = () => {
  const comments = useSelector((state) => state.chat.comments);
  return (
    <>
      {comments.map((comment) => {
        const { id, score, username, image, createdAt, content } = comment;
        return (
          <div key={id}>
            <div className="flex items-start bg-white my-8 py-8 px-7 rounded-xl">
              <Score score={score} id={id} />
              <Comment username={username} image={image} createdAt={createdAt} content={content} />
            </div>
            <div className="comments">
              {comment.replies.map((reply) => {
                return (
                  <div
                    className="flex items-start bg-white my-8 py-8 
                    px-7 rounded-xl w-[85%] ml-auto"
                    key={reply.id}
                  >
                    <RepliesScore score={reply.score} commentId={id} replyId={reply.id} />
                    <Comment
                      username={reply.username}
                      image={reply.image}
                      createdAt={reply.createdAt}
                      content={reply.content}
                    />
                  </div>
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
