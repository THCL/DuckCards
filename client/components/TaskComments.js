import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const TaskComments = ({
  comments
}) => {
  return (
    <div>
      <TextField
        hintText="Leave a comment"
        fullWidth={true}
      />
      <RaisedButton label="Submit comment" primary={true} />
      <ul className="comments-view">
        {comments.map(comment =>
          <li>
            <strong>{comment.user}:</strong> {comment.comment}
          </li>
        )}
      </ul>
    </div>
  );
};

export default TaskComments;