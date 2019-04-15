const localPhotos = JSON.parse(localStorage.getItem('photos'));
const initialState = {
  isLoading: false,
  items: localPhotos || []
};

import { FETCH_FEED_START, FETCH_FEED_RESULT, LIKE_PHOTO, DISLIKE_PHOTO } from '../actions';

const feed = (state = initialState, action) => {
  console.log(`action -- ${action.type}`);
  switch(action.type) {
    case FETCH_FEED_START:
      return {
        isLoading: true,
        items: state.items
      };
    case FETCH_FEED_RESULT:
      return {
        isLoading: false,
        items: [...state.items, ...action.payload]
      };
    case LIKE_PHOTO:
      const itemsAfterLike = state.items.map((it) => {
        if(it.id !== action.payload) return it;
        it.liked_by_user = true;
        it.likes++;
        return it;
      });
      return {
        isLoading: state.isLoading,
        items: itemsAfterLike
      };
    case DISLIKE_PHOTO:
      const itemsAfterDislike = state.items.map((it) => {
        if(it.id !== action.payload) return it;
        it.liked_by_user = false;
        it.likes--;
        return it;
      });
      return {
        isLoading: state.isLoading,
        items: itemsAfterDislike
      };
    default:
      return state;
  }
}

export default feed;
