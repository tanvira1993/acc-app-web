/* Setup blank page controller */
angular.module('accountingApp').controller('ProjectController', ['$scope', '$rootScope', '$location', '$timeout', '$http', function($scope, $rootScope, $location, $timeout, $http) {
	$scope.$on('$viewContentLoaded', function() {
        // initialize core components

        $scope.project = {
        	name: null,
        	desc: null
        };

        $scope.validateCreate = function (){
        	var formStatus = true;

        	for ( var input in $scope.project) {

        		if( input === 'name' ||  input==='desc' ){
        			if (!!$scope.projectForm[input].$error.required) {
        				$scope.projectForm[input].$setDirty(true);
        				formStatus = false;
        			}
        		}
        	}

        	return formStatus;
        }

        $scope.createProject= function(){
        	if ($scope.validateCreate()) {
        		toastr.info("'info', 'Loading!', 'Please wait.'")
        		$http({
        			method: 'post',
        			url: $rootScope.BaseUrl+'project',
        			data:$scope.project
        		}).then(function (response) {
        			$scope.project=null;
        			toastr.success("Project Created..!!") 

        		}, function (response) {
        			swal({
        				title: response.data.heading,
        				text: response.data.message,
        				html:true,
        				type: 'error'
        			}); 
        			toastr.error("Project could not be Created!!")
        		});
        	}

        	else{
        		toastr.error("Please Fill required field!")

        	}

        	
        }

        
    });
}]);
