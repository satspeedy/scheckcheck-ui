'use strict';

describe('Controller: BildungstraegerListCtrl', function () {

  // load the controller's module
  beforeEach(module('scheckcheckUiApp'));

  var BildungstraegerListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BildungstraegerListCtrl = $controller('BildungstraegerListCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
