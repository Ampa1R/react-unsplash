import React from 'react';
import PropTypes from 'prop-types';
import './Likes.scss';

function Likes(props) {
  const classes = props.likedByUser ? 'Likes__Heart liked' : 'Likes__Heart';

  return (
    <div className="Likes">
      <svg version="1.1" onClick={props.onLike} className={classes} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 -4 52 60" xmlSpace="preserve">
        <path d="M24.85,10.126c2.018-4.783,6.628-8.125,11.99-8.125c7.223,0,12.425,6.179,13.079,13.543
        	c0,0,0.353,1.828-0.424,5.119c-1.058,4.482-3.545,8.464-6.898,11.503L24.85,48L7.402,32.165c-3.353-3.038-5.84-7.021-6.898-11.503
        	c-0.777-3.291-0.424-5.119-0.424-5.119C0.734,8.179,5.936,2,13.159,2C18.522,2,22.832,5.343,24.85,10.126z"/>
      </svg>
      <div className="Likes__Count">
        {props.likes}
      </div>
    </div>
  );
}

Likes.propTypes = {
  likes: PropTypes.number.isRequired,
  likedByUser: PropTypes.bool.isRequired,
  onLike: PropTypes.func.isRequired
};

export default Likes;
