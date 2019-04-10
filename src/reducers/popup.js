import { SHOW_POPUP, HIDE_POPUP } from '../actions';

const initialState = false;

const popup = (state = initialState, action) => {
  switch(action.type) {
    case SHOW_POPUP:
      console.log(SHOW_POPUP);
      return true;
    case HIDE_POPUP:
      console.log(HIDE_POPUP);
      return false;
    default:
      return state;
  }
}

export default popup;
