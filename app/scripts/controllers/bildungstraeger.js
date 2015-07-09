'use strict';

/**
 * @ngdoc function
 * @name scheckcheckUiApp.controller:BildungstraegerCtrl
 * @description
 * # BildungstraegerCtrl
 * Controller of the scheckcheckUiApp
 */
angular.module('scheckcheckUiApp')
  .controller('BildungstraegerCtrl', function ($scope, $http, $routeParams) {
    var bildungstraegerId = $routeParams.bildungstraegerId;
    $http.get('http://scheckcheck-satspeedy.rhcloud.com/resources/bildungstraeger/' + bildungstraegerId).
      success(function(data) {
        $scope.bildungstraeger = data;
      });
  });
