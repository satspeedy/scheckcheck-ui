'use strict';

describe('Controller: BildungsmassnahmeListCtrl', function () {

  // load the controller's module
  beforeEach(module('scheckcheckUiApp'));

  var BildungsmassnahmeListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BildungsmassnahmeListCtrl = $controller('BildungsmassnahmeListCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
  });
});
