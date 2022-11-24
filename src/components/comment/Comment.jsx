import ButtonReply from "../utils/ButtonReply";
import UserCommentInfo from "./UserCommentInfo";

const Comment = ({ image, username, createdAt, content }) => {
  return (
    <>
      <div>
        <div className="flex justify-between items-center mb-5">
          <UserCommentInfo image={image} username={username} createdAt={createdAt} />
          <ButtonReply />
        </div>
        <p>{content}</p>
      </div>
    </>
  );
};

export default Comment;
