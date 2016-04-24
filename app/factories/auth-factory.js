(function () {
  'use strict';

  angular
    .module('pacemakerClient')
    .factory('Auth', Auth);

  function Auth($cookies, $http, baseurl, baseendpoint, $window) {
    /**
    * @ngdoc service
    * @name pacemakerClient.Auth
    *
    * @description Auth services for pacemakerClient application
    */
    var AuthBase = {},
        client_id =  "8de5d2e1e76a407b94d56a588fa41a57",
        response_type = "",
        redirect_uri = "http://192.168.1.221:3000/#/home";

    AuthBase.factoryName = 'Auth';

    AuthBase.getAuthorizationPage = function (response, callback) {
      /**
      * @ngdoc method
      * @name getAuthorizationPage
      * @methodOf pacemakerClient.Auth
      * @description
      * Returns the authorization code.
      */
      console.log(response);
      $window.location.href = baseurl + baseendpoint + 'authorize?client_id='+ client_id +
      '&response_type=' + 'code' +
      '&redirect_uri=' + redirect_uri;
   };

    return AuthBase;
  }
}());
