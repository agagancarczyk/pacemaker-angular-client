(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name pacemakerClient.factory:Users
   *
   * @description
   *
   */
  angular
    .module('pacemakerClient')
    .factory('Users', Users);

    function Users($cookies, $http, baseurl, baseendpoint, $log) {
    var UsersBase = {},
        isLogged = false;

    UsersBase.factoryName = 'Users';

    UsersBase.getIslogged = function () {
      return isLogged;
    };

    UsersBase.setIslogged = function (state) {
      isLogged = state;
    };

    UsersBase.getAuthData = function () {
      var data;

      if ($cookies.get('pacemakerData')) {
        data = $cookies.getObject('pacemakerData');
      }

      return data;
    };

    UsersBase.login = function (token, email, callback) {

      var token = '';
      var email = '';

      return $http({
        method: 'POST',
        url: baseurl + baseendpoint + token + '/users/generateToken/' + email,
      })
      .then(function successCallback(response) {
        console.log(response)
        callback(response);
      }, function errorCallback(response) {
        console.log('FAILURE for POST to [' + baseurl + baseendpoint + token + '/users/generateToken/' + email + ']: ', response);
        callback(response);
      });
    };

    UsersBase.signup = function (callback) {
      return $http({
        method: 'POST',
        url: baseurl + baseendpoint + '/users',
      })
      .then(function successCallback(response) {
        callback(response);
      }, function errorCallback(response) {
        console.log('FAILURE for POST to [' + baseurl + baseendpoint + '/users' + ']: ', response);
        callback(response);
      });
    };

    return UsersBase;
  }
}());
