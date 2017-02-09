import angular from 'angular';
import articlesController from '../../../../src/js/controllers/articlesController.js'

angular.module('admin').controller('articlesController', function($scope, articlesFactory) {
  var vm = this;

  articlesController.loadArticles().then(json => {
    vm.articles = json.articles;
    $scope.$apply();
  });
});
