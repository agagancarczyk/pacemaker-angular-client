(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name reports.controller:ReportsCtrl
   *
   * @description
   *
   */
  angular
    .module('reports')
    .controller('ReportsCtrl', ReportsCtrl);

  function ReportsCtrl(Users, $cookies) {
    var vm = this;
    vm.ctrlName = 'ReportsCtrl';
    vm.userProfile = '';

    /*
     * Get User's Profile
     */
    Users.getUserProfile().success(function (data) {
      vm.userProfile = data;
      vm.location = vm.userProfile.location;
      vm.bDate = new Date(vm.userProfile.birthday);
      vm.bMnth = ("0" + (vm.bDate.getMonth()+1)).slice(-2),
      vm.bDay  = ("0" + vm.bDate.getDate()).slice(-2);
      vm.fullBDate = vm.bDay + '-' + vm.bMnth + '-' + vm.bDate.getFullYear();
    });
  }
}());
