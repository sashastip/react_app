var PostForm = React.createClass({
  render: function() {
    return (
      <form className="postForm">
        <input type="text" placeholder="Title" />
        <input type="text" placeholder="Text" />
        <input type="submit" value="Post" />
      </form>
    );
  }
});