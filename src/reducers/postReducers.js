import { omit } from "lodash";
import { POST_TYPES } from "../types";

const postReducers = (state = {}, action) => {
  switch (action.type) {
    case POST_TYPES.FETCH_POSTS:
      return action.payload;
    case POST_TYPES.CREATE_POST:
      console.log(action.payload);
      return { ...state, ...action.payload };
    case POST_TYPES.DELETE_POST:
      return omit(state, action.payload);
  }

  return state;
};

export default postReducers;
