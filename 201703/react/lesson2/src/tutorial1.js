var CommentBox = React.createClass({
   render: function() {
      return (
          <div class='commentbox'>
             hello  I am a commentbox
          </div>
      );
   }
});

ReactDOM.render(
    <CommentBox />,
    document.getElementById('content')
);