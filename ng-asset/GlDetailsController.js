/* Setup blank page controller */
angular.module('accountingApp').controller('GlDetailsController', ['$scope', '$rootScope', '$location', '$timeout', '$http','$stateParams', function($scope, $rootScope, $location, $timeout, $http,$stateParams) {
	$scope.$on('$viewContentLoaded', function() {
        // initialize core components
         $scope.id = $stateParams.id;
        $scope.type = $stateParams.type;

        console.log("query String parameters=>",$scope.id,$scope.type)

        $scope.getAllProjectList= function ()
        {
        	$http({
        		method: 'get',
        		url: $rootScope.BaseUrl+'allEntryByGlId/' + $scope.id +'/'+ $scope.type,
        	}).then(function (response) {
        		$scope.project= response.data; 
        	}, 
        	function (response) {               

        	});
        }
        $scope.getAllProjectList()
        $scope.calculation = function (){
        	console.log('length=>',$scope.project.length)
        	console.log('value=>',$scope.project[0]['amount'])
        	$scope.value = 0;
        	for (let i=0; i<$scope.project.length;i++){
        		$scope.value = $scope.value + $scope.project[i]['amount']
        	}
        	console.log("Sum =>",$scope.value)
        }
    });
}]);
