import angular from 'angular';

angular.module('admin').factory('articlesFactory',['$resource', function($resource) {

  function getArticles() {
    var Articles = $resource('http://localhost:3000/articles')
    Articles.get(function(articles) {
      console.log(articles);
    });
  }

  return {getArticles: getArticles}
}]);
