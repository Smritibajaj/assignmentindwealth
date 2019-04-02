import React from 'react';
import FundDetail from './FundDetail';

const Funds = React.createClass({
  render() {
    return (
      <div className="photo-grid">
        {this.props.posts.map((post, i) => <FundDetail {...this.props} key={i} i={i} post={post} />)}
      </div>
    )
  }
});

export default Funds;
