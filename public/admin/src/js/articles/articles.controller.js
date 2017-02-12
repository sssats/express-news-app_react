import angular from 'angular';

angular.module('admin').controller('articlesController', [
  '$scope',
  'articlesFactory',
  function($scope, articlesFactory) {
    var vm = this;

    articlesFactory.getArticles().$promise.then(data => {
      vm.articles = data.articles;
    });
  }
]);
