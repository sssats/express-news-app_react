import angular from 'angular';

angular.module('admin').factory('articlesFactory', [
  '$resource',
  function($resource) {

    function getArticles() {
      var Articles = $resource('http://localhost:3000/articles')
      return Articles.get(function(articles) {
        return articles.$promise;
      });
    }

    function getArticle(id) {
      var Articles = $resource('http://localhost:3000/articles/' + id)
      return Articles.get(function(article) {
        return article.$promise;
      });
    }

    return {getArticles: getArticles, getArticle: getArticle}
  }
]);
