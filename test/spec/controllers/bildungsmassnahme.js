'use strict';

describe('Controller: BildungsmassnahmeCtrl', function () {

  // load the controller's module
  beforeEach(module('scheckcheckUiApp'));

  var BildungsmassnahmeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BildungsmassnahmeCtrl = $controller('BildungsmassnahmeCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
