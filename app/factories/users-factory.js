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

    var client_id =  "8de5d2e1e76a407b94d56a588fa41a57";
    var response_type = "code";
    var redirect_uri = "http://192.168.1.221:3000/#/home";

    UsersBase.getAuthorizationPage = function (response, callback) {
     return $http({
       method: 'GET',
       url: 'https://runkeeper.com/apps/authorize?client_id='+ client_id +'&response_type=' + response_type + '&redirect_uri=' + redirect_uri + '&state=runkeeper-redirect'
     })
     .then(function successCallback(response) {
       console.log('success');
       callback(response);
     }, function errorCallback(response) {
       console.log('FAILURE for GET to [' + url+ ']: ', response);
       callback(response);
     });
   };

    return UsersBase;
  }
}());
