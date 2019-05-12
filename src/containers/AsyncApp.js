import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchPosts } from "../store/thunk/index";
import { PostList } from "../components/posts";
import { Picker } from "../components/picker";

import * as actions from "../store/actions/index";

class AsyncApp extends Component {
  options = ["reactjs", "frontend"];

  constructor(props) {
    super(props);
    this.onSelectOption = this.onSelectOption.bind(this);
    this.onRefresh = this.onRefresh.bind(this);
  }

  componentDidMount() {
    //fetch posts
    this.props.getSubReddit(this.props.selectedSubreddit);
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.selectedSubreddit !== this.prevProps.selectedSubreddit) {
  //     this.props.getSubReddit(this.props.selectedSubreddit);
  //   }
  // }

  onSelectOption = value => {
    this.props.setSubReddit(value);
    this.props.getSubReddit(value);
  };

  onRefresh = e => {
    e.preventDefault();
    this.props.getSubReddit(this.props.selectedSubreddit);
  };

  render() {
    const { isFetching, posts, lastUpdated } = this.props;
    return (
      <React.Fragment>
        <Picker options={this.options} onChange={this.onSelectOption} />
        {!isFetching && <button onClick={this.onRefresh}>Refresh</button>}
        {!isFetching && (
          <div>Last Updated: {new Date(lastUpdated).toLocaleTimeString()} </div>
        )}
        {isFetching && posts.length === 0 && <h1>Loading...</h1>}
        {!isFetching && posts.length === 0 && <h1>Empty...</h1>}
        <PostList posts={posts} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.postsBySubreddit.posts[state.selectedSubreddit] || [],
    isFetching: state.postsBySubreddit.isFetching,
    lastUpdated: state.postsBySubreddit.lastUpdated,
    selectedSubreddit: state.selectedSubreddit
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getSubReddit: subreddit => {
      dispatch(fetchPosts(subreddit));
    },
    setSubReddit: subReddit => {
      dispatch(actions.selectSubReddit(subReddit));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AsyncApp);
