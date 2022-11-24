import { useDispatch } from "react-redux";
import { replyDecrementScore, replyIncrementScore } from "../../features/chat/chatSlice";
import Button from "./ScoreBtn";

const RepliesScore = ({ commentId, replyId, score }) => {
  const dispatch = useDispatch();

  const handleReplyIncrementScore = () => {
    const payload = { commentId, replyId };
    dispatch(replyIncrementScore(payload));
  };
  const handleReplyDecrementScore = () => {
    const payload = { commentId, replyId };
    dispatch(replyDecrementScore(payload));
  };

  return (
    <div className="mr-8 flex flex-col justify-center items-center font-bold bg-[#eaecf1] rounded-lg">
      <Button text="+" handleClick={handleReplyIncrementScore} />
      <span className="text-[#5457b6] text-lg py-1">{score}</span>
      <Button text="-" handleClick={handleReplyDecrementScore} />
    </div>
  );
};

export default RepliesScore;
