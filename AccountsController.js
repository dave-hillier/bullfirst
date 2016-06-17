bullsfirstModule.controller('AccountsController', function($scope, accountsStorage){

    var rows = $scope.rows = accountsStorage.get();

    $scope.totals = {
        name: '',
        marketValue: 0,
        cash: 0,
        legend: 'none'
    };

	$scope.$watch('rows', function () {
        console.log('watch');
        for (var i = 0; i < rows.length; i++) {
            $scope.totals.marketValue += rows[i].marketValue;
            $scope.totals.cash += rows[i].cash;
        }
        accountsStorage.put(rows);
    }, true);

    $scope.addAccount = function() {
        rows.push({
            name: 'New Account',
            marketValue: Math.random() * 100000,
            cash: Math.random() * 400000,
            legend: 'cyan'
        });
    }
});