var Post = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    body: React.PropTypes.node
  },
  
  render: function() {
    return (
      <div className="post">
        <div>Title: {this.props.post.title}</div>
        <div>Body: {this.props.post.body}</div>
      </div>
    );
  }
});