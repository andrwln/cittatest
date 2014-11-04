'use strict';

describe('Controller: TicketsCtrl', function () {

  // load the controller's module
  beforeEach(module('cittaApp'));

  var TicketsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TicketsCtrl = $controller('TicketsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
