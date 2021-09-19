import Firebase from 'firebase';
import config from '../config';
import { uniqueId } from "lodash";
import { POST_TYPES } from "../types";

const Posts = new Firebase(`${config.FIREBASE.DATABASE_URL}`)

function fetchPosts() {
  return dispatch => {
    Posts.on('value', snapshot => {
      dispatch({
        type: POST_TYPES.FETCH_POSTS,
        payload: snapshot.val()
      });
    });
  }
}

function createPost(post) {
  return dispatch => Posts.push(post);
}

function deletePost(key) {
  return dispatch => Posts.child(key).remove();
}

export default {
    fetchPosts,
    createPost,
    deletePost
}
