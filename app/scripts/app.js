'use strict';

/**
 * @ngdoc overview
 * @name scheckcheckUiApp
 * @description
 * # scheckcheckUiApp
 *
 * Main module of the application.
 */
angular
  .module('scheckcheckUiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    'LocalStorageModule'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
      })
      .when('/about', {
        templateUrl: 'views/about.html',
      })
      .when('/login', {
        templateUrl: 'views/login.html',
      })
      .when('/profil', {
        templateUrl: 'views/profil.html',
        controller: 'ProfilCtrl'
      })
      .when('/bildungstraegerList', {
        templateUrl: 'views/bildungstraegerList.html',
        controller: 'BildungstraegerListCtrl'
      })
      .when('/bildungsmassnahmeList', {
        templateUrl: 'views/bildungsmassnahmeList.html',
        controller: 'BildungsmassnahmeListCtrl'
      })
      .when('/bewertungErstellen', {
        templateUrl: 'views/bewertungErstellen.html',
        controller: 'BewertungErstellenCtrl'
      })
      .when('/bildungstraeger/:bildungstraegerId', {
        templateUrl: 'views/bildungstraeger.html',
        controller: 'BildungstraegerCtrl'
      })
      .when('/bildungsmassnahme/:bildungsmassnahmeId', {
        templateUrl: 'views/bildungsmassnahme.html',
        controller: 'BildungsmassnahmeCtrl'
      })
      .when('/bewertung/:bewertungId', {
        templateUrl: 'views/bewertung.html',
        controller: 'BewertungCtrl'
      })
      .when('/impressum', {
        templateUrl: 'views/impressum.html',
      })
      .when('/kontaktfunktion/:teilnehmerId', {
        templateUrl: 'views/kontaktfunktion.html',
        controller: 'KontaktfunktionCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
