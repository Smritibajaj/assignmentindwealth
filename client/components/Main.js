import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Explore Funds</Link>
        </h1>
        <h1>Showing 12121 posts</h1>
        {React.cloneElement({...this.props}.children, {...this.props})}
      </div>
    )
  }
});

export default Main;
