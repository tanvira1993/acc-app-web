/* Setup blank page controller */
angular.module('accountingApp').controller('ExtenTransactionController', ['$scope', '$rootScope', '$location', '$timeout', '$http', function($scope, $rootScope, $location, $timeout, $http) {
	$scope.$on('$viewContentLoaded', function() {
        // initialize core components
        const initSelect2Dropdown = function () {
        	$timeout(function () {
        		$(".select2dropdown").select2({
        			placeholder: null,
        			width: '100%'
        		});
        	}, 500);
        }
        initSelect2Dropdown();

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
        	console.log('From =>p-id & type =>',id,type);
        	$http({
        		method: 'get',
        		url: $rootScope.BaseUrl+'glByProjectId/' +id +'/' +type,
        	}).then(function (response) {
        		$scope.gl= response.data;
        	}, 
        	function (response) {               

        	});
        }

        $scope.getAllExGlList= function (id)
        {
        	if(id == null){
        		return null;
        	}
        	else {
        		$http({
        			method: 'get',
        			url: $rootScope.BaseUrl+'exGlByGlId/' +id,
        		}).then(function (response) {
        			$scope.exgl= response.data;
        		}, 
        		function (response) {               

        		});
        	}
        	
        } 
        $scope.income = {
            gl: null,
            type: null,
            amount: null,
            project: null,
            exgl: null,
            date: null,
            desc : null
        };

        $scope.extTransaction= function(){

        	if($scope.income['type'] == null ||$scope.income['gl'] == null ||$scope.income['amount'] == null ||$scope.income['project'] == null ||$scope.income['exgl'] == null ||$scope.income['date'] == null ||$scope.income['desc'] == null)
        	{
        		toastr.error("Please Fill required field!")

        	}
        	else{
        		toastr.info("'info', 'Loading!', 'Please wait.'")
        		$http({
        			method: 'post',
        			url: $rootScope.BaseUrl+'extTransaction',
        			data:$scope.income
        		}).then(function (response) {
        			$scope.income['amount'] = null
        			$scope.income['desc'] = null
        			$scope.income['date'] = null
        			$scope.income['exgl'] = null
        			toastr.success("Success..!!") 

        		}, function (response) {
        			swal({
        				title: response.data.title,
        				text: response.data.text,
        				html:true,
        				type: 'error'
        			}); 
        			toastr.error("Failed..!!")
        		});
        	}

        	

        	
        }
    });
}]);
