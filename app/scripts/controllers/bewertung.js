'use strict';

/**
 * @ngdoc function
 * @name scheckcheckUiApp.controller:BewertungCtrl
 * @description
 * # BewertungCtrl
 * Controller of the scheckcheckUiApp
 */
angular.module('scheckcheckUiApp')
  .controller('BewertungCtrl', function ($scope, $http, $routeParams) {
    var bewertungId = $routeParams.bewertungId;

    $http.get('http://localhost:8080/scheckcheck/resources/bewertung/' + bewertungId).
      success(function(data) {
        $scope.bewertung = data;
      });
  });
