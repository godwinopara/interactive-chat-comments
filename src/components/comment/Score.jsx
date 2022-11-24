import { useDispatch } from "react-redux";
import { decrementScore, incrementScore } from "../../features/chat/chatSlice";
import Button from "./ScoreBtn";

const Score = ({ id, score }) => {
  const dispatch = useDispatch();

  const handleIncrementScore = () => {
    dispatch(incrementScore(id));
  };
  const handleDecrementScore = () => {
    dispatch(decrementScore(id));
  };

  return (
    <div className="mr-8 flex flex-col justify-center items-center font-bold bg-[#eaecf1] rounded-lg">
      <Button text="+" handleClick={handleIncrementScore} />
      <span className="text-[#5457b6] text-lg py-1">{score}</span>
      <Button text="-" handleClick={handleDecrementScore} />
    </div>
  );
};

export default Score;
