import angular from 'angular';
import ngRoute from 'angular-route';
import ngResource from 'angular-resource';

var app = angular.module('admin', ['ngRoute', 'ngResource']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/articles', {
    templateUrl: 'articles.html'
  })
  .when('/article/add', {
    templateUrl: 'create-article.html'
  })
  .when('/article/:articleId/edit', {
    templateUrl: 'create-article.html'
  });
  $locationProvider.html5Mode({enabled: true, requireBase: false});
});

require('./articles/articleItem.component.js');
require('./articles/articles.factory.js');
require('./articles/articles.component.js');
require('./articles/articles.controller.js');
require('./articles/create-article.directive.js');
