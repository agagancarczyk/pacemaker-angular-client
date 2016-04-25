(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name training.controller:TrainingCtrl
   *
   * @description
   *
   */
  angular
    .module('training')
    .controller('TrainingCtrl', TrainingCtrl);

  function TrainingCtrl() {
    var vm = this;
    vm.ctrlName = 'TrainingCtrl';
  }
}());
