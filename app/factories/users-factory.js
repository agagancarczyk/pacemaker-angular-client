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

     /**
     * @ngdoc method
     * @name getUserResources
     * @methodOf pacemakerClient.Users
     * @description
     * Returns user's resources.
     */

     UsersBase.getUserResources = function (response, callback) {
      return $http.get('https://api.runkeeper.com/user/', {
        headers: {
           'Authorization': 'Bearer ' + $cookies.get('access_token'),
           'Accept': 'application/vnd.com.runkeeper.User+json'
        }
      });
    };

    return UsersBase;
  }
}());
