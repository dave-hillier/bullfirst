/*global angular */

angular.module('bullsfirst').controller('AccountsController', function ($scope, accountsStorage) {
  var rows = $scope.rows = accountsStorage.get();

  $scope.totals = {
    name: '',
    marketValue: 0,
    cash: 0,
    legend: 'none'
  };

  $scope.$watch('rows', function () {
    for (var i = 0; i < rows.length; i++) {
      $scope.totals.marketValue += rows[i].marketValue;
      $scope.totals.cash += rows[i].cash;
    }
    accountsStorage.put(rows);
  }, true);

  $scope.addAccount = function () {
    rows.push({
      name: 'New Account',
      marketValue: Math.random() * 100000,
      cash: Math.random() * 400000,
      legend: getRandomColor()
    });
  }
});

function getRandomColor() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}