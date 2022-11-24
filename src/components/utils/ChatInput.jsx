import { forwardRef } from "react";
import { useSelector } from "react-redux";

const ChatInput = forwardRef((props, ref) => {
  const currentUser = useSelector((state) => state.chat.currentUser);

  return (
    <div className="flex items-start bg-white mt-10 p-8 rounded-xl">
      <img src={currentUser.image} alt="" className="w-10" />
      <textarea
        className="w-3/4 rounded-md border outline-none focus:border-[#c3c4ef] mx-5 p-3"
        name="comment"
        id=""
        cols="50"
        rows="3"
        placeholder="Add a comment"
        ref={ref}
      ></textarea>
      <button
        onClick={props.submitComment}
        className="bg-[#5457b6] font-bold rounded-md text-white h-14 w-[120px]"
      >
        SEND
      </button>
    </div>
  );
});

export default ChatInput;
