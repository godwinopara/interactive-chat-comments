import { useSelector } from "react-redux";
import Comment from "./Comment";
import Score from "./Score";

const UsersComment = () => {
  const comments = useSelector((state) => state.chat.comments);
  return (
    <>
      {comments.map((comment) => {
        const { score, username, image, createdAt, content } = comment;
        return (
          <div key={comment.id}>
            <div className="flex items-start bg-white my-8 py-8 px-7 rounded-xl">
              <Score score={score} />
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
                    <Score score={reply.score} />
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
