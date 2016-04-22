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
    var UsersBase = {},
        isLogged = false,
        client_id =  "8de5d2e1e76a407b94d56a588fa41a57",
        response_type = "",
        redirect_uri = "http://192.168.1.221:3000/#/home";

    UsersBase.factoryName = 'Users';

    UsersBase.getIslogged = function () {
      /**
      * @ngdoc method
      * @name getIslogged
      * @methodOf pacemakerClient.Users
      * @description
      * Returns logged in user
      */

      return isLogged;
    };

    UsersBase.setIslogged = function (state) {
      /**
      * @ngdoc method
      * @name setIslogged
      * @methodOf pacemakerClient.Users
      * @description
      * Sets logged in user
      */

      isLogged = state;
    };

    UsersBase.getAuthorizationPage = function (response, callback) {
      /**
      * @ngdoc method
      * @name getAuthorizationPage
      * @methodOf pacemakerClient.Users
      * @description
      * Returns the authorization code.
      */
      console.log(response);
      $window.location.href = baseurl + baseendpoint + 'authorize?client_id='+ client_id +
      '&response_type=' + 'code' +
      '&redirect_uri=' + redirect_uri;
   };

    return UsersBase;
  }
}());
