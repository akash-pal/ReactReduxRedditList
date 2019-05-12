export const REQUEST_POSTS = "REQUEST_POSTS";
export const RECIEVE_POSTS = "RECIEVE_POSTS";
export const SELECT_SUBREDDIT = "SELECT_SUBREDDIT";

export function selectSubReddit(subReddit) {
  return {
    type: SELECT_SUBREDDIT,
    subReddit
  };
}

export function requestPosts(subreddit) {
  return {
    type: REQUEST_POSTS,
    subreddit
  };
}

export function recievePosts(subreddit, data) {
  return {
    type: RECIEVE_POSTS,
    subreddit,
    data,
    receivedAt: Date.now()
  };
}
