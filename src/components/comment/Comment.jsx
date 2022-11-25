import { useSelector } from "react-redux";
import ButtonReply from "../utils/ButtonReply";
import EditAndDeleteComment from "../utils/EditAndDeleteComment";
import UserCommentInfo from "./UserCommentInfo";

const Comment = ({
  image,
  username,
  createdAt,
  content,
  replyComment,
  deleteComment,
  editComment,
}) => {
  const currentUser = useSelector((state) => state.chat.currentUser);

  return (
    <>
      <div className="w-full">
        <div className="flex justify-between items-center mb-5">
          <UserCommentInfo image={image} username={username} createdAt={createdAt} />
          {currentUser.username === username ? (
            <EditAndDeleteComment deleteComment={deleteComment} editComment={editComment} />
          ) : (
            <ButtonReply replyComment={replyComment} />
          )}
        </div>
        <p>{content}</p>
      </div>
    </>
  );
};

export default Comment;
