
var PostsList = React.createClass({
  loadPostsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }, 

  render: function() {
    var posts = this.props.data.map(function(post) {
      return <Post key={post.id} post={post} />;
    });

    return (
      <div className="posts">
        {posts}
      </div>
    );
  }
});
