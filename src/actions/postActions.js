import { uniqueId } from "lodash";
import { POST_TYPES } from "../types";

const INITIAL_POSTS = {
  123: "One Wierd Trick...",
  456: "Bet you wanted to read this!",
};

function fetchPosts() {
  return {
    type: POST_TYPES.FETCH_POSTS,
    payload: INITIAL_POSTS,
  };
}

function createPost(post) {
  console.log(post);
  return {
    type: POST_TYPES.CREATE_POST,
    payload: {
      [uniqueId()]: post,
    },
  };
}

function deletePost(key) {
  return {
    type: POST_TYPES.DELETE_POST,
    payload: key,
  };
}

export default {
    fetchPosts,
    createPost,
    deletePost
}
