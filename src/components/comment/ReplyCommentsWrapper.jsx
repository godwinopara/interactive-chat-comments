import { useState } from "react";
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
  const showReplyCommentInput = () => {
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
        />
      </div>
      <div className="w-[85%] ml-auto">{showInput && <ChatInput />}</div>
    </>
  );
};

export default ReplyCommentsWrapper;
