'use strict';

/**
 * @ngdoc function
 * @name scheckcheckUiApp.controller:BildungsmassnahmeListCtrl
 * @description
 * # BildungsmassnahmeListCtrl
 * Controller of the scheckcheckUiApp
 */
angular.module('scheckcheckUiApp')
  .controller('BildungsmassnahmeListCtrl', function ($scope, $http) {
    $http.get('http://scheckcheck-satspeedy.rhcloud.com/resources/bildungsmassnahme').
      success(function(data) {
        $scope.bildungsmassnahmen = data;
      });
  });
