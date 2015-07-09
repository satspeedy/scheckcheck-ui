'use strict';

describe('Controller: KontaktfunktionCtrl', function () {

  // load the controller's module
  beforeEach(module('scheckcheckUiApp'));

  var KontaktfunktionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    KontaktfunktionCtrl = $controller('KontaktfunktionCtrl', {
      $scope: scope
    });
  }));

});
