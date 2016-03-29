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

    function Users($cookies, $http, baseurl, baseendpoint) {
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
      var data = $.param({
        token: token,
        email: email
      });
      return $http.post(baseurl + baseendpoint + token + '/users/generateToken/' + email , data, {

      })
      .then(function successCallback(response) {
        callback(response);
      }, function errorCallback(response) {
        console.log('FAILURE for POST to [' + baseurl + baseendpoint + token + '/users/generateToken/' + email + ']: ', response);
        callback(response);
      });
    };

    UsersBase.signup = function (callback) {
      return $http.post(baseurl + baseendpoint + '/users', {

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
