import angular from 'angular';
import articlesController from '../../../../src/js/controllers/articlesController.js'

angular.module('admin').component('articlesList', {
  template: require('./articles.template.html'),
  controller: 'articlesController'
});
