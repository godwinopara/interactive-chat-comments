import Button from "./ScoreBtn";

const Score = ({ score }) => {
  return (
    <div className="mr-8 flex flex-col justify-center items-center font-bold bg-[#eaecf1] rounded-lg">
      <Button text="+" />
      <span className="text-[#5457b6] text-lg py-1">{score}</span>
      <Button text="-" />
    </div>
  );
};

export default Score;
