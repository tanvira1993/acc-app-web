/* Setup blank page controller */
angular.module('accountingApp').controller('ProjectDetailsController', ['$scope', '$rootScope', '$location', '$timeout', '$http', '$stateParams',function($scope, $rootScope, $location, $timeout, $http,$stateParams) {
	$scope.$on('$viewContentLoaded', function() {
        // initialize core components
        $scope.id = $stateParams.id;
        console.log('id=>', $scope.id)

        $scope.getAllExpenseList= function ()
        {
        	$http({
        		method: 'get',
        		url: $rootScope.BaseUrl+'projectAmountsList/' +$scope.id +'/' +'100',
        	}).then(function (response) {
        		$scope.expenseList= response.data;
        	}, 
        	function (response) {               

        	});
        }
        $scope.getAllExpenseList()

        $scope.getAllIncomeList= function ()
        {
        	$http({
        		method: 'get',
        		url: $rootScope.BaseUrl+'projectAmountsList/' +$scope.id +'/' +'200',
        	}).then(function (response) {
        		$scope.incomeList= response.data;
        	}, 
        	function (response) {               

        	});
        }
        $scope.getAllIncomeList()

        $scope.getTotalIncome= function ()
        {
            $http({
                method: 'get',
                url: $rootScope.BaseUrl+'TotalAmounts/' +$scope.id +'/' +'200',
            }).then(function (response) {
                $scope.income= response.data[0];
            }, 
            function (response) {               

            });
        }
        $scope.getTotalIncome()

        $scope.getTotalExpense= function ()
        {
            $http({
                method: 'get',
                url: $rootScope.BaseUrl+'TotalAmounts/' +$scope.id +'/' +'100',
            }).then(function (response) {
                $scope.expense= response.data[0];
            }, 
            function (response) {               

            });
        }
        $scope.getTotalExpense()

        $scope.calculation = function (){
            $scope.value = $scope.income['extotal'] - $scope.expense['extotal'] + ' BDT'
        }

    });
}]);
