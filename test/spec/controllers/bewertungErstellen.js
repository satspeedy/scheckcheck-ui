'use strict';

describe('Controller: BewertungErstellenCtrl', function () {

  // load the controller's module
  beforeEach(module('scheckcheckUiApp'));

  var BewertungErstellenCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BewertungErstellenCtrl = $controller('BewertungErstellenCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
  });
});
