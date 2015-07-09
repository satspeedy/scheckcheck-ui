'use strict';

/**
 * @ngdoc function
 * @name scheckcheckUiApp.controller:BildungstraegerListCtrl
 * @description
 * # BildungstraegerListCtrl
 * Controller of the scheckcheckUiApp
 */
angular.module('scheckcheckUiApp')
  .controller('BildungstraegerListCtrl', function ($scope, $http) {
    $http.get('http://scheckcheck-satspeedy.rhcloud.com/resources/bildungstraeger').
      success(function(data) {
        $scope.bildungstraegers = data;
      });
  });
