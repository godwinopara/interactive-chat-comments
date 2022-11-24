import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addComment } from "../../features/chat/chatSlice";

const ChatInput = () => {
  const currentUser = useSelector((state) => state.chat.currentUser);
  const comments = useSelector((state) => state.chat.comments);
  const dispatch = useDispatch();

  const comment = useRef();

  const randomId = () => {
    let number = comments.length + 1;
    return number++;
  };

  const submitComment = (e) => {
    e.preventDefault();

    const payload = {
      id: randomId(),
      content: comment.current.value,
      score: 0,
      image: currentUser.image,
      username: currentUser.username,
      createdAt: "Today",
      replies: [],
    };

    dispatch(addComment(payload));

    comment.current.value = "";
  };

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
        ref={comment}
      ></textarea>
      <button
        onClick={submitComment}
        className="bg-[#5457b6] font-bold rounded-md text-white h-14 w-[120px]"
      >
        SEND
      </button>
    </div>
  );
};

export default ChatInput;
