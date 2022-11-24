const Button = ({ text, handleClick }) => {
  return (
    <button onClick={handleClick} className="text-[#c3c4ef] text-2xl px-3">
      {text}
    </button>
  );
};

export default Button;
