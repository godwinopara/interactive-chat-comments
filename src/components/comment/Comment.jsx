import ButtonReply from "../utils/ButtonReply";
import UserCommentInfo from "./UserCommentInfo";

const Comment = ({ image, username, createdAt, content, replyComment }) => {
  return (
    <>
      <div className="w-full">
        <div className="flex justify-between items-center mb-5">
          <UserCommentInfo image={image} username={username} createdAt={createdAt} />
          <ButtonReply replyComment={replyComment} />
        </div>
        <p>{content}</p>
      </div>
    </>
  );
};

export default Comment;
