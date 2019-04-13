import unsplash from '../api/unsplash';

export const FETCH_FEED_START = 'FETCH_FEED_START';
export const FETCH_FEED_RESULT = 'FETCH_FEED_RESULT';
export const LOG_IN = 'LOG_IN';
export const SHOW_POPUP = 'SHOW_POPUP';
export const HIDE_POPUP = 'HIDE_POPUP';
export const LIKE_PHOTO = 'LIKE_PHOTO';
export const DISLIKE_PHOTO = 'DISLIKE_PHOTO';


let page = 1;
export const fetchFeed = () => {
  return async function (dispatch) {
    dispatch({type: FETCH_FEED_START});
    const res = await unsplash.photos.listPhotos(page++, 10, "latest");
    const feed = await res.json();
    console.log(feed);
    if(feed.errors) {
      console.error("can't get feed!");
      console.log(feed.errors);
    }
    else dispatch({type: FETCH_FEED_RESULT, payload: feed});
  }
};

export const likePhoto = id => {
  return async function(dispatch) {

    const res = await unsplash.photos.likePhoto(id);
    const result = await res.json();
    console.log(result);
    if(result.errors) {
      // TODO: handle errors
      console.error("can't like photo!");
      console.log(result.errors);
    }
    else dispatch({type: LIKE_PHOTO, payload: id});
  }
}
export const unlikePhoto = id => {
  return async function(dispatch) {

    const res = await unsplash.photos.unlikePhoto(id);
    const result = await res.json();
    console.log(result);
    if(result.errors) {
      // TODO: handle errors
    }
    else dispatch({type: DISLIKE_PHOTO, payload: id});
  }
}

export const authByCode = code => {
  return async function (dispatch) {
    const res = await unsplash.auth.userAuthentication(code);
    const result = await res.json();
    if(result.access_token) {
      unsplash.auth.setBearerToken(result.access_token);
      localStorage.setItem('unsplash-token', result.access_token);
      dispatch({type: LOG_IN});
    }
    else {
      // TODO: handle error
      console.error("can't log in!");
      console.log(result);
    }
  }
}

export const showPopup = () => {
  return {type: SHOW_POPUP};
}
export const hidePopup = () => {
  return {type: HIDE_POPUP};
}
