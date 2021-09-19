import React, { Component } from "react";
import { connect } from 'react-redux';
import { map } from "lodash";
import { postActions } from "../actions";
import PostItem from './PostItem';
class App extends Component {
  state = { post: "" };

  componentWillMount() {
    this.props.fetchPosts();
  }

  handleInputChange(event) {
    this.setState({
      post: event.target.value,
    });
  }

  handleFormSubmit(event) {
    event.preventDefault();

    this.props.createPost(this.state.post);
  }

  renderPosts() {
    return map(this.props.posts, (post, key) => {
      return <PostItem key={key} post={post} id={key} />;
    });
  }

  render() {
    return (
      <div>
        <h4>Create a Post</h4>
        <form
          onSubmit={this.handleFormSubmit.bind(this)}
          className="form-inline"
        >
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Add a post"
              value={this.state.post}
              onChange={this.handleInputChange.bind(this)}
            />
            <button type="submit" className="btn btn-primary">
              Create Post
            </button>
          </div>
        </form>
        <ul className="list-group">{this.renderPosts()}</ul>
      </div>
    );
  }
}

export default connect((state => state), {
  fetchPosts: postActions.fetchPosts,
  createPost: postActions.createPost
})(App);
