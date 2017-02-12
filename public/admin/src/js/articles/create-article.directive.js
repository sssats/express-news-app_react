import angular from 'angular';
import requestProviderController from '../../../../src/js/controllers/requestProviderController.js';
import config from '../../../../src/js/config.js';

angular.module('admin').directive('createArticle', function() {
  return {
    template: require('./create-article.template.html'),
    bindToController: true,
    controllerAs: '$ctrl',
    scope: {
      article: '=?'
    },
    controller: function($scope, $routeParams, articlesFactory) {
      var vm = this;

      if ($routeParams.articleId) {
        articlesFactory.getArticle($routeParams.articleId).$promise.then(json => {
          vm.article = json.articles
        })
      }

      vm.create = function(form) {
        var id = vm.article._id ? '/' + vm.article._id : '';
        if (form.$valid) {
          requestProviderController.post(config.url.api + config.url.createArticle + id,
            JSON.stringify({'title': vm.article.title, 'body': vm.article.body})
          ).then(function(json) {
            $scope.$emit('articleSaved', json)
          });
        }
      }
    }
  }
}).directive('long', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$validators.long = function(modelValue, viewValue) {
        if (ctrl.$isEmpty(modelValue)) {
          // consider empty models to be valid
          return true;
        }
        if (viewValue.length > 20) {
          return true;
        }
        return false;
      }
    }
  }
});
