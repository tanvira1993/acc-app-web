/* Setup blank page controller */
angular.module('accountingApp').controller('SettingController', ['$scope', '$rootScope', '$location', '$timeout', '$http', function($scope, $rootScope, $location, $timeout, $http) {
	$scope.$on('$viewContentLoaded', function() {
        // initialize core components
        console.log('hello from stng ctrl')
        const initSelect2Dropdown = function () {
        	$timeout(function () {
        		$(".select2dropdown").select2({
        			placeholder: null,
        			width: '100%'
        		});
        	}, 500);
        }

        $scope.gl = {
        	project: null,
        	type: null,
        	name: null
        };

        $scope.validateCreate = function (){
        	var formStatus = true;

        	for ( var input in $scope.project) {

        		if( input === 'project' ||  input==='name' || input ==='type'){
        			if (!!$scope.glForm[input].$error.required) {
        				$scope.glForm[input].$setDirty(true);
        				formStatus = false;

        				console.log(formStatus)
        			}
        		}
        	}
        	console.log(formStatus)

        	return formStatus;
        }

        $scope.createGl= function(){
        	if ($scope.gl['name'] == null || $scope.gl['project'] == null || $scope.gl['type'] == null){
        		toastr.error("Please Fill required field!")

        	}
        	else {
        		toastr.info("'info', 'Loading!', 'Please wait.'")
        		$http({
        			method: 'post',
        			url: $rootScope.BaseUrl+'gl',
        			data:$scope.gl
        		}).then(function (response) {
        			$scope.gl['name'] = null
                    toastr.success("G/L Created..!!") 

                }, function (response) {
                	swal({
                		title: response.data.heading,
                		text: response.data.message,
                		html:true,
                		type: 'error'
                	}); 
                	toastr.error("G/L could not be Created!!")
                });
        	}

        	

        	
        }

        $scope.getAllProjectList= function ()
        {
        	$http({
        		method: 'get',
        		url: $rootScope.BaseUrl+'project',
        	}).then(function (response) {
        		$scope.project= response.data;
        	}, 
        	function (response) {               

        	});
        }

        $scope.getAllProjectList()

        $scope.getAllGlList= function (id,type)
        {
            console.log('TO =>p-id & type =>',id,type);
            $http({
                method: 'get',
                url: $rootScope.BaseUrl+'glByProjectId/' +id +'/' +type,
            }).then(function (response) {
                $scope.gl= response.data;
            }, 
            function (response) {               

            });
        }

        $scope.groupgGl = {
            project: null,
            type: null,
            name: null,
            gl : null
        };
        $scope.createExtGl= function(){
            if ($scope.groupgGl['name'] == null || $scope.groupgGl['type'] == null || $scope.groupgGl['project'] == null || $scope.groupgGl['gl'] == null){
                toastr.error("Please Fill required field!")

            }
            else {
                toastr.info("'info', 'Loading!', 'Please wait.'")
                $http({
                    method: 'post',
                    url: $rootScope.BaseUrl+'exGl',
                    data:$scope.groupgGl
                }).then(function (response) {
                    $scope.groupgGl['name'] = null
                    toastr.success("E G/L Created..!!") 

                }, function (response) {
                    swal({
                        title: response.data.heading,
                        text: response.data.message,
                        html:true,
                        type: 'error'
                    }); 
                    toastr.error("E G/L could not be Created!!")
                });
            }

            

            
        }
        
        initSelect2Dropdown();
    });
}]);
