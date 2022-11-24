import replyIcon from "../../assets/icon-reply.svg";

const ButtonReply = () => {
  return (
    <button className="flex items-center text-[#5457b6] text-lg font-bold">
      <img src={replyIcon} alt="" className="mr-2" />
      Reply
    </button>
  );
};

export default ButtonReply;
