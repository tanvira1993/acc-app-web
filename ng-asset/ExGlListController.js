/* Setup blank page controller */
angular.module('accountingApp').controller('ExGlListController', ['$scope', '$rootScope', '$location', '$timeout', '$http', function($scope, $rootScope, $location, $timeout, $http) {
	$scope.$on('$viewContentLoaded', function() {
        // initialize core components
        $scope.filteredTodosKKK = []
        ,$scope.currentPageKKK = 1
        ,$scope.numPerPageKKK = 10
        ,$scope.maxSizeKKK = 5; 
        $scope.ExpenseList = function(){

        	$http({
        		method: 'get',
        		url: $rootScope.BaseUrl+'exGl'
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

        $scope.p1 ={
        	pass : null
        }

        $scope.DeleteExpensesId = function(id){
        	$scope.idFor = id
        	console.log('hgurhgu=>',$scope.idFor)
        }


        $scope.DeleteExpenses = function(){
        	console.log("id=>",$scope.p1.pass);
        	console.log('hgurhgu got id=>',$scope.idFor)
        	if($scope.p1.pass==='123'){   
        		console.log('hgurhgu got id=>',$scope.idFor)
        		$http({
        			method: 'get',
        			url: $rootScope.BaseUrl+'deleteExGl/'+$scope.idFor
        		}).then(function (response) {
        			toastr.success("Deleted..!!")
        			$scope.expenseList = response.data;
        			$scope.ExpenseList()
        		}, function (response) {                
        		});
        	}
        	else{
        		toastr.info("Wrong Pass-Code!!")
        	}
        }
        $scope.ExpenseList()
    });
}]);
