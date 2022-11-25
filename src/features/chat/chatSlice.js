import { createSlice } from "@reduxjs/toolkit";
import userImg from "../../assets/avatars/image-juliusomo.png";
import MaxImg from "../../assets/avatars//image-maxblagun.png";
import RamsesMironImg from "../../assets/avatars/image-ramsesmiron.png";
import AmyRobsonImg from "../../assets/avatars/image-amyrobson.png";

const initialState = {
  currentUser: {
    image: userImg,
    username: "juliusomo",
  },
  comments: [
    {
      id: 1,
      content:
        "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
      createdAt: "1 month ago",
      score: 12,
      image: AmyRobsonImg,
      username: "amyrobson",
      replies: [],
    },
    {
      id: 2,
      content:
        "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
      createdAt: "2 weeks ago",
      score: 5,
      image: MaxImg,
      username: "maxblagun",
      replies: [
        {
          id: 1,
          content:
            "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
          createdAt: "1 week ago",
          score: 4,
          replyingTo: "maxblagun",
          image: RamsesMironImg,
          username: "ramsesmiron",
        },
        {
          id: 2,
          content:
            "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
          createdAt: "2 days ago",
          score: 2,
          replyingTo: "ramsesmiron",
          image: userImg,
          username: "juliusomo",
        },
      ],
    },
  ],
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    deleteComment(state, action) {
      const { commentId } = action.payload;
      state.comments = state.comments.filter((comment) => comment.id !== commentId);
    },
    addComment(state, action) {
      state.comments.push(action.payload);
    },
    deleteReply(state, action) {
      const { commentId, replyId } = action.payload;
      const comment = state.comments.find((comment) => comment.id === commentId);
      comment.replies = comment.replies.filter((reply) => reply.id !== replyId);
    },
    addReply(state, action) {
      const { commentId, reply } = action.payload;
      const comment = state.comments.find((comment) => comment.id === commentId);
      comment.replies.push(reply);
    },

    incrementScore(state, action) {
      const comment = state.comments.find((comment) => comment.id === action.payload);
      comment.score += 1;
    },
    decrementScore(state, action) {
      const comment = state.comments.find((comment) => comment.id === action.payload);
      comment.score -= 1;
    },
    replyIncrementScore(state, action) {
      const { commentId, replyId } = action.payload;
      const comment = state.comments.find((comment) => comment.id === commentId);
      const commentReplies = comment.replies.find((commentReply) => commentReply.id === replyId);
      commentReplies.score += 1;
    },
    replyDecrementScore(state, action) {
      const { commentId, replyId } = action.payload;
      const comment = state.comments.find((comment) => comment.id === commentId);
      const commentReplies = comment.replies.find((commentReply) => commentReply.id === replyId);
      commentReplies.score -= 1;
    },
  },
});

export const {
  deleteComment,
  addComment,
  addReply,
  deleteReply,
  incrementScore,
  decrementScore,
  replyDecrementScore,
  replyIncrementScore,
} = chatSlice.actions;
export default chatSlice.reducer;
