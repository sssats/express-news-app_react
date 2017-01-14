import {
  createStore,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import articles from './reducers/articles'

const store = createStore(articles,
  applyMiddleware(thunk));

export default store;
