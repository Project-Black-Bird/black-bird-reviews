import React from "react";
import PropTypes from "prop-types";

function Comment(props) {
  return (
    <div className="Comment-container">
      <h3>{props.username}</h3>
      <p>{props.text}</p>
    </div>
  );
}
Comment.propTypes = {
  username: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  comment_id: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
};
export default Comment;
