/*global describe, it, beforeEach, inject, expect */

describe('AccountsController', function () {

  beforeEach(module('bullsfirst'));

  var ctrl, scope, accountsStorage;

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    accountsStorage = {
      putCount: 0,
      getCount: 0,
      get: function () {
        this.getCount++;
        return [];
      },
      put: function (p) {
        this.putCount++;
      }
    };

    ctrl = $controller('AccountsController', {
      $scope: scope,
      accountsStorage: accountsStorage
    });
  }));

  it("initial totals", function () {
    expect(scope.totals.marketValue).toBe(0);
    expect(scope.totals.cash).toBe(0);
  });

  it("one row after add account", function () {
    scope.addAccount();
    scope.$digest();

    expect(scope.rows.length).toBe(1);
  });

  it("not zero totals after add account", function () {
    scope.addAccount();
    scope.$digest();

    expect(scope.totals.marketValue).toBeGreaterThan(0);
    expect(scope.totals.cash).toBeGreaterThan(0);
  });

  it("put to service after add", function () {
    scope.addAccount();
    scope.$digest();

    expect(accountsStorage.putCount).toBeGreaterThan(0);
  });
});

