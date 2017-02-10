import angular from 'angular';
import articlesController from '../../../../src/js/controllers/articlesController.js'

angular.module('admin').controller('articlesController', [
  '$scope',
  'articlesFactory',
  function($scope, articlesFactory) {
    var vm = this;

    articlesFactory.getArticles();

    articlesController.loadArticles().then(json => {
      vm.articles = json.articles;
      $scope.$apply();
    });
  }
]);
