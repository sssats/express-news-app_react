import angular from 'angular';

angular.module('admin').component('articleItem', {
  bindings: {
    article: '='
  },
  template: require('./articleItem.template.html'),
  controller: function ($scope) {
    var vm = this;
    vm.showEditForm = false;

    $scope.$on('articleSaved', function () {
      vm.showEditForm = false;
      $scope.$apply ();
    });

    vm.editArticle = function () {
      vm.showEditForm = vm.showEditForm ? false : true;
    }
  }
});
