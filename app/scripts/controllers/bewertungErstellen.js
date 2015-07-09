'use strict';

/**
 * @ngdoc function
 * @name scheckcheckUiApp.controller:BewertungErstellenCtrl
 * @description
 * # BewertungErstellenCtrl
 * Controller of the scheckcheckUiApp
 */
angular.module('scheckcheckUiApp')
  .controller('BewertungErstellenCtrl', function ($scope, $http) {
    $http.get('http://scheckcheck-satspeedy.rhcloud.com/resources/bildungstraeger').
      success(function(data) {
        $scope.bildungstraegers = data;
      });

    $scope.werte = [1, 2, 3, 4, 5];

    $scope.changedValue = function(selectedBildungstraeger){
      $http.get('http://scheckcheck-satspeedy.rhcloud.com/resources/bildungsmassnahme/bildungstraeger/id/' + selectedBildungstraeger.id).
        success(function(data) {
          $scope.bildungsmassnahmen = data;
        });
    };

    $scope.submit = function() {
      var bewertungObj = {
          bildungsmassnahmeId : $scope.selectedBildungstraeger.id,
          teilnehmerId : 1,
          datum : Date.now(),
          freiText : $scope.freiText,
          bewertungInhaltWeiterbildung : $scope.bewertungInhaltWeiterbildung,
          bewertungUmsetzungWeiterbildung : $scope.bewertungUmsetzungWeiterbildung,
          bewertungPraxisnaehe : $scope.bewertungPraxisnaehe,
          bewertungLehrveranstaltungen : $scope.bewertungLehrveranstaltungen,
          bewertungDozenten : $scope.bewertungDozenten,
          bewertungOrganisation : $scope.bewertungOrganisation,
          bewertungAusstattung : $scope.bewertungAusstattung
        };
        var res = $http.post('http://scheckcheck-satspeedy.rhcloud.com/resources/bewertung', bewertungObj);
        res.success(function(data) {
          $scope.message = data;
        });
        // Making the fields empty
        //
        $scope.selectedBildungstraeger='';
        $scope.selectedBildungsmassnahme='';
        $scope.freiText='';
        $scope.bewertungInhaltWeiterbildung='';
        $scope.bewertungUmsetzungWeiterbildung='';
        $scope.bewertungPraxisnaehe='';
        $scope.bewertungLehrveranstaltungen='';
        $scope.bewertungDozenten='';
        $scope.bewertungOrganisation='';
        $scope.bewertungAusstattung='';
      };

  });
