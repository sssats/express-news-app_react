import angular from 'angular';
import requestProviderController from '../../../../src/js/controllers/requestProviderController.js';
import config from '../../../../src/js/config.js';

angular.module('admin').directive('createArticle', function() {
  return {
    template: require('./create-article.template.html'),
    bindToController: true,
    controllerAs: '$ctrl',
    controller: function($scope) {
      var vm = this;

      vm.create = function(form) {
        if (form.$valid) {
          requestProviderController.post(config.url.api + config.url.createArticle, JSON.stringify({'title': vm.title, 'body': vm.body})).then(function(json) {
            console.log(json);
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
