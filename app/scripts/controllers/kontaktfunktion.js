'use strict';

/**
 * @ngdoc function
 * @name scheckcheckUiApp.controller:KontaktfunktionCtrl
 * @description
 * # KontaktfunktionCtrl
 * Controller of the scheckcheckUiApp
 */
angular.module('scheckcheckUiApp')
  .controller('KontaktfunktionCtrl', function ($scope, $http, $routeParams) {
    $http.get('http://scheckcheck-satspeedy.rhcloud.com/resources/teilnehmer/' +  $routeParams.teilnehmerId).
      success(function(data) {
        $scope.empfaenger = data;
      });

    $scope.kontaktFunktion = function() {
      var kontaktfunktionObj = {
        empfaengerId : $scope.empfaenger.id,
        betreff : $scope.betreff,
        nachricht : $scope.nachricht
      };
      var res = $http.post('http://scheckcheck-satspeedy.rhcloud.com/resources/kontaktfunktion', kontaktfunktionObj);
      res.success(function(data) {
        $scope.message = data;
      });
      // Making the fields empty
      //
      $scope.message='';
    };
  });
