(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name activities.controller:NewActivityCtrl
   *
   * @description
   *
   */
  angular
    .module('activities')
    .controller('NewActivityCtrl', NewActivityCtrl);

  function NewActivityCtrl() {
    var vm = this;
    vm.ctrlName = 'NewActivityCtrl';
  }
}());
