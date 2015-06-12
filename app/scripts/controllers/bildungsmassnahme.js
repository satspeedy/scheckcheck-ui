'use strict';

/**
 * @ngdoc function
 * @name scheckcheckUiApp.controller:BildungsmassnahmeCtrl
 * @description
 * # BildungsmassnahmeCtrl
 * Controller of the scheckcheckUiApp
 */
angular.module('scheckcheckUiApp')
  .controller('BildungsmassnahmeCtrl', function ($scope, $http, $routeParams) {

    var bildungsmassnahmeId = $routeParams.bildungsmassnahmeId;

    $http.get('http://localhost:8080/scheckcheck/resources/bildungsmassnahme/' + bildungsmassnahmeId).
      success(function(data) {
        $scope.bildungsmassnahme = data;
      });
  });

