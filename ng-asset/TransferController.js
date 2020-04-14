/* Setup blank page controller */
angular.module('accountingApp').controller('TransferController', ['$scope', '$rootScope', '$location', '$timeout', '$http', function($scope, $rootScope, $location, $timeout, $http) {
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


        $scope.getAllGlListFrom= function (id,type)
        {
        	console.log('From =>p-id & type =>',id,type);
        	$http({
        		method: 'get',
        		url: $rootScope.BaseUrl+'glByProjectId/' +id +'/' +type,
        	}).then(function (response) {
        		$scope.glf= response.data;
        	}, 
        	function (response) {               

        	});
        }

        $scope.getAllGlListTo= function (id,type)
        {
        	console.log('TO =>p-id & type =>',id,type);
        	$http({
        		method: 'get',
        		url: $rootScope.BaseUrl+'glByProjectId/' +id +'/' +type,
        	}).then(function (response) {
        		$scope.glt= response.data;
        	}, 
        	function (response) {               

        	});
        }

        $scope.income = {
        	gl: null,
        	type: null,
        	amount: null,
        	projectTo: null,
        	glTo: null,
        	project: null
        };


        $scope.transferAmount= function(){

        	if($scope.income['type'] == null ||$scope.income['gl'] == null ||$scope.income['amount'] == null ||$scope.income['projectTo'] == null ||$scope.income['glTo'] == null ||$scope.income['project'] == null )
        	{
        		toastr.error("Please Fill required field!")

        	}
        	else{
        		console.log("data post=>",$scope.income)
        		toastr.info("'info', 'Loading!', 'Please wait.'")
        		$http({
        			method: 'post',
        			url: $rootScope.BaseUrl+'fundTransfer',
        			data:$scope.income
        		}).then(function (response) {
        			$scope.income['amount'] = null
        			toastr.success("Amount Transferred..!!") 

        		}, function (response) {
        			swal({
        				title: response.data.title,
        				text: response.data.text.code,
        				html:true,
        				type: 'error'
        			}); 
        			toastr.error("Amount could not be Transferred!!")
        		});
        	}

        	

        	
        }

    });
}]);
