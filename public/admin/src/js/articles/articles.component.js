import angular from 'angular';

angular.module('admin').component('articlesList', {
  template: require('./articles.template.html'),
  controller: 'articlesController'
});
