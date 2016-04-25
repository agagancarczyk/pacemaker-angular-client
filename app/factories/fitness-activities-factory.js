(function () {
  'use strict';

  angular
    .module('pacemakerClient')
    .factory('FitnessActivities', FitnessActivities);

  function FitnessActivities($cookies, $http, apiBaseurl) {
    /**
    * @ngdoc service
    * @name pacemakerClient.FitnessActivities
    *
    * @description FitnessActivities services for pacemakerClient application
    */
    var FitnessActivitiesBase = {};
    FitnessActivitiesBase.factoryName = 'FitnessActivities';

    /**
    * @ngdoc method
    * @name fetFeeds
    * @methodOf pacemakerClient.FitnessActivities
    * @description
    * Returns user's recent activities.
    */
    FitnessActivitiesBase.getFeeds = function (response, callback) {
      return $http.get(apiBaseurl + '/fitnessActivities?pageSize=4', {
        headers: {
           'Authorization': 'Bearer ' + $cookies.get('access_token'),
           'Accept': 'application/vnd.com.runkeeper.FitnessActivityFeed+json'
        }
      });
    };
    return FitnessActivitiesBase;
  }
}());