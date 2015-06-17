'use strict';

describe('Controller: BewertungCtrl', function () {

  // load the controller's module
  beforeEach(module('scheckcheckUiApp'));

  var BewertungCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BewertungCtrl = $controller('BewertungCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
  });
});
