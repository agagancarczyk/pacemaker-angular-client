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
          console.log('success user resources: ' + JSON.stringify(response));
     }, function errorCallback(response) {
          console.log('failure!');
     });
  };

    return UsersBase;
  }
}());
