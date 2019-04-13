import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Likes from '../../components/Likes';
import './Detail.scss';

function Detail( { item, onLike } ) {

  const created = new Date(item.created_at);

  return (
    <div className="Detail">
      <Link to="/" className="Detail__Back">
          ← на главную
      </Link>

      <div className="DetailCard">
        <div className="DetailCard__Desc">
          <div className="DetailCard__Likes">
            <Likes likes={item.likes} likedByUser={item.liked_by_user} onLike={() => onLike(item.id, item.liked_by_user)} />
          </div>
          <div className="DetailCard__Author">
            by&nbsp;
            <a href={item.user.links.html} target="_blank">
              {item.user.first_name} {item.user.last_name}
            </a>
          </div>
          <div className="DetailCard__Date">
            {created.toLocaleDateString('ru')}
          </div>
        </div>
        <img src={item.urls.full} className="DetailCard__Image" />
      </div>
    </div>
  );
}

Detail.propTypes = {

};

export default Detail;
