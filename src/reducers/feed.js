const localState = JSON.parse(localStorage.getItem('photos'));
const initialState = localState || [];

import { FETCH_FEED, GET_FEED, LIKE_PHOTO, DISLIKE_PHOTO } from '../actions';

const feed = (state = initialState, action) => {
  console.log(`action -- ${action.type}`);
  switch(action.type) {
    case FETCH_FEED:
      return state;
    case GET_FEED:
      return action.payload;
    case LIKE_PHOTO:
      return state.map((it) => {
        if(it.id !== action.payload) return it;
        it.liked_by_user = true;
        it.likes++;
        return it;
      });
      return state;
    case DISLIKE_PHOTO:
      return state.map((it) => {
        if(it.id !== action.payload) return it;
        it.liked_by_user = false;
        it.likes--;
        return it;
      });
      return state;
    default:
      return state;
  }
}

export default feed;
