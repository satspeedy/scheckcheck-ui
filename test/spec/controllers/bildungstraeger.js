'use strict';

describe('Controller: BildungstraegerCtrl', function () {

  // load the controller's module
  beforeEach(module('scheckcheckUiApp'));

  var BildungstraegerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BildungstraegerCtrl = $controller('BildungstraegerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
  });
});
