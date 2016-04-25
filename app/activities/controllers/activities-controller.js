(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name activities.controller:ActivitiesCtrl
   *
   * @description
   *
   */
  angular
    .module('activities')
    .controller('ActivitiesCtrl', ActivitiesCtrl);

  function ActivitiesCtrl() {
    var vm = this;
    vm.ctrlName = 'ActivitiesCtrl';
  }
}());
