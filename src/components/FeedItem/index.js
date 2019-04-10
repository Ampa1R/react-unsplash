import React from 'react';
import PropTypes from 'prop-types';
import Likes from '../Likes';
import { Link } from "react-router-dom";
import './FeedItem.scss';

function FeedItem(props) {
  const created = new Date(props.created);

  return (
    <div className="FeedItem">
      <Link to={props.id}>
        <img className="FeedItem__Image" src={props.src.regular} />
      </Link>
      <div className="FeedItem__Desc">
        <div className="FeedItem__Likes">
          <Likes likes={props.likes} likedByUser={props.likedByUser} onLike={() => props.onLike(props.id, props.likedByUser)} />
        </div>
        <div className="FeedItem__Author">
          by&nbsp;
          <a href={props.user.links.html} target="_blank">
            {props.user.first_name} {props.user.last_name}
          </a>
        </div>
        <div className="FeedItem__Date">
          {created.toLocaleDateString('ru')}
        </div>
      </div>
    </div>
  );
}

FeedItem.propTypes = {
  id: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  likedByUser: PropTypes.bool.isRequired,
  src: PropTypes.objectOf(PropTypes.string).isRequired,
  user: PropTypes.object.isRequired,
  created: PropTypes.string.isRequired,
};

export default FeedItem;
