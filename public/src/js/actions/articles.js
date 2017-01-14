export const GET_ARTICLES = 'GET_ARTICLES';
export const GET_ARTICLE = 'GET_ARTICLE';
export const LOADED_ARTICLES = 'LOADED_ARTICLES';
import loadArticlesController from '../controllers/loadArticlesController.js'

export function getArticles() {
  return dispatch => {
    loadArticlesController.loadArticles().then(json => {
      dispatch(loadedArticles(json));
    })
  }
}

export function loadedArticles(res) {
  return {
    type: LOADED_ARTICLES,
    payload: res
  }
}

export function getArticle(id) {
  return {
    type: GET_ARTICLE,
    id: id
  }
}
