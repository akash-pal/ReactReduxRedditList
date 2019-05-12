import { combineReducers } from "redux";
import {
  RECIEVE_POSTS,
  REQUEST_POSTS,
  SELECT_SUBREDDIT
} from "../actions/index";

const initialState = {
  isFetching: false,
  posts: {},
  lastUpdated: String
};

function postsBySubreddit(state = initialState, action) {
  switch (action.type) {
    case REQUEST_POSTS: {
      return {
        ...state,
        isFetching: true
      };
    }
    case RECIEVE_POSTS: {
      return {
        ...state,
        isFetching: false,
        lastUpdated: action.receivedAt,
        posts: {
          ...state.posts,
          [action.subreddit]: action.data
        }
      };
    }
    default:
      return state;
  }
}

function selectedSubreddit(state = "reactjs", action) {
  switch (action.type) {
    case SELECT_SUBREDDIT:
      return action.subReddit;
    default:
      return state;
  }
}

const rootreducer = combineReducers({
  postsBySubreddit,
  selectedSubreddit
});

export default rootreducer;
