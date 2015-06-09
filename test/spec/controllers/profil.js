'use strict';

describe('Controller: ProfilCtrl', function () {

  // load the controller's module
  beforeEach(module('scheckcheckUiApp'));

  var ProfilCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProfilCtrl = $controller('ProfilCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
