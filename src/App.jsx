import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import UsersComment from "./components/comment/UserComment";
import ChatInput from "./components/utils/ChatInput";
import { addComment } from "./features/chat/chatSlice";

function App() {
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
    <div className="max-w-[750px] mx-auto my-10">
      <UsersComment />
      <ChatInput ref={comment} submitComment={submitComment} />
    </div>
  );
}

export default App;
