import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addReply } from "../../features/chat/chatSlice";
import ChatInput from "../utils/ChatInput";
import Comment from "./Comment";
import Score from "./Score";

const CommentWrapper = ({ id, score, username, image, createdAt, content }) => {
  const [showInput, setShowInput] = useState(false);

  const currentUser = useSelector((state) => state.chat.currentUser);
  const comments = useSelector((state) => state.chat.comments);
  const dispatch = useDispatch();
  const comment = useRef();

  const showReplyCommentInput = () => {
    setShowInput((prevState) => !prevState);
  };

  const randomId = () => {
    const currentComment = comments.find((comment) => comment.id === id);
    let totalReplies = currentComment.replies.length + 1;
    return totalReplies++;
  };

  const submitComment = () => {
    const payload = {
      commentId: id,
      reply: {
        id: randomId(),
        content: comment.current.value,
        score: 0,
        image: currentUser.image,
        username: currentUser.username,
      },
    };
    dispatch(addReply(payload));
    comment.current.value = "";
  };

  return (
    <>
      <div className="flex items-start bg-white my-8 py-8 px-7 rounded-xl">
        <Score score={score} id={id} />
        <Comment
          username={username}
          image={image}
          createdAt={createdAt}
          content={content}
          replyComment={showReplyCommentInput}
        />
      </div>
      {showInput && <ChatInput ref={comment} submitComment={submitComment} />}
    </>
  );
};

export default CommentWrapper;
