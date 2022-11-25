import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addReply, deleteReply } from "../../features/chat/chatSlice";
import ChatInput from "../utils/ChatInput";
import Comment from "./Comment";
import RepliesScore from "./RepliesScore";

const ReplyCommentsWrapper = ({
  score,
  commentId,
  replyId,
  username,
  image,
  createdAt,
  content,
}) => {
  const [showInput, setShowInput] = useState(false);
  const currentUser = useSelector((state) => state.chat.currentUser);
  const comments = useSelector((state) => state.chat.comments);

  const dispatch = useDispatch();

  const commentInput = useRef();

  const showReplyCommentInput = () => {
    setShowInput((prevState) => !prevState);
  };

  const randomId = () => {
    const currentComment = comments.find((comment) => comment.id === commentId);
    let totalReplies = currentComment.replies.length + 1;
    return totalReplies++;
  };

  const submitComment = () => {
    const payload = {
      commentId,
      reply: {
        id: randomId(),
        content: commentInput.current.value,
        score: 0,
        image: currentUser.image,
        username: currentUser.username,
      },
    };
    dispatch(addReply(payload));
    console.log(commentInput.current.value);
    commentInput.current.value = "";
  };

  const deleteUserComment = () => {
    dispatch(deleteReply({ commentId, replyId }));
  };

  const editUserComment = () => {
    const commentToEdit = comments.filter((comment) => comment.id === commentId);

    console.log(commentToEdit);
    // commentInput.textContent = commentToEdit.content;

    console.log(commentInput.current.textContent);
    setShowInput((prevState) => !prevState);
  };

  return (
    <>
      <div className="flex items-start bg-white my-8 py-8 px-7 rounded-xl w-[85%] ml-auto">
        <RepliesScore score={score} commentId={commentId} replyId={replyId} />
        <Comment
          username={username}
          image={image}
          createdAt={createdAt}
          content={content}
          replyComment={showReplyCommentInput}
          deleteComment={deleteUserComment}
          editComment={editUserComment}
        />
      </div>
      <div className="w-[85%] ml-auto">
        {showInput && <ChatInput ref={commentInput} submitComment={submitComment} />}
      </div>
    </>
  );
};

export default ReplyCommentsWrapper;
