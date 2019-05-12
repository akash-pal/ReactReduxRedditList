import axios from "axios";
import * as actions from "../actions/index";

export function fetchPosts(subreddit) {
  return dispatch => {
    dispatch(actions.requestPosts(subreddit));
    axios.get(`https://www.reddit.com/r/${subreddit}.json`).then(response => {
      dispatch(actions.recievePosts(subreddit, response.data.data.children));
    });
  };
}
