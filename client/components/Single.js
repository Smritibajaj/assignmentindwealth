import React from 'react';
import FundDetail from './FundDetail';

const Single = React.createClass({
  render() {
    const { postId } = this.props.params;

    const i = this.props.posts.findIndex((post) => post.code === postId);
    const post = this.props.posts[i];

    return (
      <div className="single-photo">
        <FundDetail i={i} post={post} {...this.props} />
      </div>
    )
  }
});

export default Single;
