import angular from 'angular';
import articlesController from '../../../../src/js/controllers/articlesController.js'

angular.module('admin').component('myArticles', {
  template: require('./articles.template.html'),
  controller: function() {
    var vm = this;

    vm.$onInit = () => {
      articlesController.loadArticles().then(json => {
        vm.articles = json.articles;
      });
    }
  }
});
