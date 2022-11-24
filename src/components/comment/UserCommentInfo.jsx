const UserCommentInfo = ({ image, username, createdAt }) => {
  return (
    <div className="flex items-center w-3/4">
      <img src={image} alt="" className="h-10 w-10 mr-3" />
      <h2 className="mr-3">{username}</h2>
      <p>{createdAt}</p>
    </div>
  );
};

export default UserCommentInfo;
