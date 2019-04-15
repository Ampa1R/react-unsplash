import { LOG_IN } from '../actions'

import { isLogged } from '../api/unsplash';

const logged = (state = isLogged, action) => {
  switch(action.type) {
    case LOG_IN:
      return true;
    default:
      return state;
  }
};

export default logged;
