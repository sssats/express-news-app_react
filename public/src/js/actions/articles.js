export const GET_ARTICLES = 'GET_ARTICLES';
export const GET_ARTICLE = 'GET_ARTICLE';
export const LOADED_ARTICLES = 'LOADED_ARTICLES';
export const LOADED_ARTICLE = 'LOADED_ARTICLE';
import loadArticlesController from '../controllers/loadArticlesController.js'

export function getArticles() {
  return dispatch => {
    loadArticlesController.loadArticles().then(json => {
      dispatch(loadedArticles(json));
    })
  }
}

export function getArticle(id) {
  return dispatch => {
    loadArticlesController.loadArticleById(id).then(json => {
      dispatch(loadedArticle(json));
    })
  }
}

export function loadedArticles(res) {
  return {
    type: LOADED_ARTICLES,
    payload: res
  }
}

export function loadedArticle(res) {
  return {
    type: LOADED_ARTICLE,
    payload: res
  }
}
