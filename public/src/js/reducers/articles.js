import {
  GET_ARTICLES,
  GET_ARTICLE,
  LOADED_ARTICLES
} from '../actions/articles';
import store from '../store';

const initialState = {
  articles: [{}, {}]
}

export default function articles(state = initialState, action) {
  switch (action.type) {
    case LOADED_ARTICLES:
      return action.payload;
    case GET_ARTICLES:
      return state;
    default:
      return state;
  }
}
