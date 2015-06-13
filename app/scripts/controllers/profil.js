'use strict';

/**
 * @ngdoc function
 * @name scheckcheckUiApp.controller:ProfilCtrl
 * @description
 * # ProfilCtrl
 * Controller of the scheckcheckUiApp
 */
angular.module('scheckcheckUiApp')
  .controller('ProfilCtrl', function ($scope, $http) {
    $http.get('http://localhost:8080/scheckcheck/resources/teilnehmer/1').
      success(function(data) {
        $scope.teilnehmer = data;
      });
  });
