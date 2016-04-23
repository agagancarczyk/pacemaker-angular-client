(function () {
  'use strict';

  angular
    .module('pacemakerClient')
    .factory('Users', Users);

  function Users($cookies, $http, baseurl, baseendpoint, $window) {
    /**
    * @ngdoc service
    * @name pacemakerClient.Users
    *
    * @description Services for pacemakerClient application
    */
    var UsersBase = {};

    UsersBase.factoryName = 'Users';

    UsersBase.getUserResources = function (response, callback) {
     /**
     * @ngdoc method
     * @name getUserResources
     * @methodOf pacemakerClient.Users
     * @description
     * Returns user's resources.
     */
     $http({
       method: 'GET',
       url: 'https://api.runkeeper.com/user/',
       headers: {
          'Authorization': 'Bearer ' + $cookies.get('access_token'),
          'Accept': 'application/vnd.com.runkeeper.User+json'
       }
     }).then(function successCallback(response) {
          //console.log('success user resources: ' + JSON.stringify(response));
     }, function errorCallback(response) {
          console.log('failure!');
     });
  };

    return UsersBase;
  }
}());
