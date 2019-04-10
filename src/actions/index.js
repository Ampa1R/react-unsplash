import unsplash from '../api/unsplash';

export const FETCH_FEED = 'FETCH_FEED';
export const GET_FEED = 'GET_FEED'; // TODO: replace with something else
export const LOG_IN = 'LOG_IN';
export const SHOW_POPUP = 'SHOW_POPUP';
export const HIDE_POPUP = 'HIDE_POPUP';
export const LIKE_PHOTO = 'LIKE_PHOTO';
export const DISLIKE_PHOTO = 'DISLIKE_PHOTO';


let page = 1;
export const fetchFeed = () => {
  return async function (dispatch) {
    dispatch({type: FETCH_FEED});
    const res = await unsplash.photos.listPhotos(page++, 10, "latest");
    const feed = await res.json();
    console.log(feed);
    dispatch({type: GET_FEED, payload: feed});
  }
};

export const likePhoto = id => {
  return async function(dispatch) {

    // const res = await unsplash.photos.likePhoto(id);
    // const result = await res.json();
    // console.log(result);
    dispatch({type: LIKE_PHOTO, payload: id});
  }
}
export const dislikePhoto = id => {
  return async function(dispatch) {

    // const res = await unsplash.photos.unlikePhoto(id);
    // const result = await res.json();
    // console.log(result);
    dispatch({type: DISLIKE_PHOTO, payload: id});
  }
}

export const authByCode = code => {
  return async function (dispatch) {
    const res = await unsplash.auth.userAuthentication(code);
    const data = await res.json();
    unsplash.auth.setBearerToken(data.access_token);
    localStorage.setItem('unsplash-token', code);
    dispatch({type: LOG_IN});
  }
}

export const showPopup = () => {
  return {type: SHOW_POPUP};
}
export const hidePopup = () => {
  return {type: HIDE_POPUP};
}
