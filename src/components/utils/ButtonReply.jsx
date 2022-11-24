import replyIcon from "../../assets/icon-reply.svg";

const ButtonReply = ({ replyComment }) => {
  return (
    <button
      onClick={replyComment}
      className="flex items-center text-[#5457b6] text-lg font-bold w-1/4"
    >
      <img src={replyIcon} alt="" className="mr-2" />
      Reply
    </button>
  );
};

export default ButtonReply;
