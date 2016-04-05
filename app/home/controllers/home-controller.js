(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name home.controller:HomeCtrl
   *
   * @description Home controller handling connection
   * to a User's Health Graph Account in Runkeeper.
   * The Health Graph API uses OAuth 2.0.
   */
  angular
    .module('home')
    .controller('HomeCtrl', HomeCtrl);

  function HomeCtrl($rootScope, Users, $state, $stateParams, $cookieStore,
    $location, $http, $window) {

    var vm = this;
    vm.ctrlName = 'HomeCtrl';
    vm.parameters = {
      redirect_uri: $stateParams.redirect_uri
    };
    vm.responseDetails = '';
    vm.error = '';

    if ($window.location.search.indexOf('?code=')> -1){
      vm.code = $window.location.search.replace('?code=','');
      $http({
        method: 'POST',
        url: 'https://runkeeper.com/apps/token',
        headers: {
           'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: {
          'grant_type': 'authorization_code',
          'code': vm.code,
          'redirect_uri' : 'http://192.168.1.221:3000/#/home',
          'client_id': '8de5d2e1e76a407b94d56a588fa41a57',
          'client_secret': '827641434aa3435e9ec2dd4fb2dd53bb'
        }
      })
      .then(function successCallback(response) {
        console.log('success',response);
      }, function errorCallback(response) {
        console.log('FAILURE for GET to  ', response);
      });
      console.log('received code from runkeeper server:',vm.code);
    }

    /*
     * Get Runkeeper's Authorization Page
     */
    vm.getAuthorizationPage = function () {
      console.log();
      Users.getAuthorizationPage(vm.parameters.redirect_uri, function (response) {
        console.log(response);
        if (angular.isObject(response)) {
          vm.responseDetails = response.config.url;
          console.log('Hello! ' + vm.responseDetails);
        } else if (response.data.error) {
          /* jshint camelcase: false */
          vm.error = response.data.error_description;
        }
      });
    };
  }
}());
