var CommentBox = React.createClass({
    render: function() {
        return (
            <div className='comentBox'>
                <h1>Comments</h1>
                <CommentList />
                <CommentForm />
            </div>
        );
    }
});