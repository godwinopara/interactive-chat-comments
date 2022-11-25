import deleteIcon from "../../assets/icon-delete.svg";
import editIcon from "../../assets/icon-edit.svg";

const EditAndDeleteComment = ({ deleteComment, editComment }) => {
  return (
    <div className="flex items-center">
      <button onClick={deleteComment} className="flex items-center mr-5 font-bold text-[#ed6468]">
        <img src={deleteIcon} alt="" className="mr-2" />
        Delete
      </button>
      <button onClick={editComment} className="flex items-center font-bold text-[#5457b6]">
        <img src={editIcon} alt="" className="mr-2" />
        Edit
      </button>
    </div>
  );
};

export default EditAndDeleteComment;
