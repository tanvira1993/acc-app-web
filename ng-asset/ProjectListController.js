/* Setup blank page controller */
angular.module('accountingApp').controller('ProjectListController', ['$scope', '$rootScope', '$location', '$timeout', '$http', function($scope, $rootScope, $location, $timeout, $http) {
	$scope.$on('$viewContentLoaded', function() {
        // initialize core components
        console.log('Hello')
        $scope.filteredTodosKKK = []
        ,$scope.currentPageKKK = 1
        ,$scope.numPerPageKKK = 10
        ,$scope.maxSizeKKK = 5;	
        $scope.ExpenseList = function(){

        	$http({
        		method: 'get',
        		url: $rootScope.BaseUrl+'project'
        	}).then(function (response) {
        		$scope.expenseList = response.data;
        		$scope.$watch('currentPageKKK + numPerPageKKK', function() {
        			let beginKKK = (($scope.currentPageKKK - 1) * $scope.numPerPageKKK)
        			, end = beginKKK + $scope.numPerPageKKK;

        			$scope.filteredTodosKKK = $scope.expenseList.slice(beginKKK, end);
        			
        		});
        	}, function (response) {				
        	});

        }
        $scope.ExpenseList()
        
    });
}]);
