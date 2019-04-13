import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FeedItem from '../FeedItem';
import './Feed.scss';

function Feed(props) {
  return (
    <div className="Feed">
      {props.feed.map(
        photo => <FeedItem
            key={photo.id}
            id={photo.id}
            likes={photo.likes}
            likedByUser={photo.liked_by_user}
            src={photo.urls}
            user={photo.user}
            created={photo.created_at}
            onLike={props.onLike}
          />
      )}
      <div className="Feed__Loading">
        Loading...
      </div>
    </div>
  );
}

Feed.propTypes = {
  feed: PropTypes.array.isRequired
};

export default Feed;
