import { useSelector } from "react-redux";

const UserCommentInfo = ({ image, username, createdAt }) => {
  const currentUser = useSelector((state) => state.chat.currentUser);
  return (
    <div className="flex items-center w-3/4">
      <img src={image} alt="" className="h-10 w-10 mr-3" />
      <h2 className="mr-3">{username}</h2>
      {currentUser.username === username && (
        <div className="text-white font-semibold rounded-sm mr-3 px-2 bg-[#5457b6]">you</div>
      )}
      <p>{createdAt}</p>
    </div>
  );
};

export default UserCommentInfo;
