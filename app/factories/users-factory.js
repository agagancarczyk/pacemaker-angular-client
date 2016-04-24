(function () {
  'use strict';

  angular
    .module('pacemakerClient')
    .factory('Users', Users);

  function Users($cookies, $http, apiBaseurl, $window) {
    /**
    * @ngdoc service
    * @name pacemakerClient.Users
    *
    * @description Users services for pacemakerClient application
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
      return $http.get(apiBaseurl + '/user/', {
        headers: {
           'Authorization': 'Bearer ' + $cookies.get('access_token'),
           'Accept': 'application/vnd.com.runkeeper.User+json'
        }
      });
    };

    /**
    * @ngdoc method
    * @name getUserProfile
    * @methodOf pacemakerClient.Users
    * @description
    * Returns user's profile.
    */
    UsersBase.getUserProfile = function (response, callback) {
     return $http.get(apiBaseurl + '/profile/', {
       headers: {
          'Authorization': 'Bearer ' + $cookies.get('access_token'),
          'Accept': 'application/vnd.com.runkeeper.Profile+json'
       }
     });
   };
    return UsersBase;
  }
}());
