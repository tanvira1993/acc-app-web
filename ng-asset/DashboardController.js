/* Setup blank page controller */
angular.module('accountingApp').controller('DashboardController', ['$scope', '$rootScope', '$location', '$timeout', '$http', function($scope, $rootScope, $location, $timeout, $http) {
	$scope.$on('$viewContentLoaded', function() {
        // initialize core components
        console.log('hello from dash ctrl total calu-cation-na-ha')
        $scope.gettotalvalue= function ()
        {
        	$http({
        		method: 'get',
        		url: $rootScope.BaseUrl+'totalvalue',
        	}).then(function (response) {
        		$scope.project= response.data;
        		console.log("total value=>",$scope.project)
        	}, 
        	function (response) {               

        	});
        }
        $scope.gettotalvalue()
    });
}]);
