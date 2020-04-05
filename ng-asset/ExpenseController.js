
/* Setup blank page controller */
angular.module('accountingApp').controller('ExpenseController', ['$scope', '$rootScope', '$location', '$timeout', '$http', function($scope, $rootScope, $location, $timeout, $http) {
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

        $scope.income = {
        	gl: null,
        	type: null,
        	amount: null,
        	desc: null,
        	project: null
        };

        $scope.validateCreate = function (){
        	var formStatus = true;

        	for ( var input in $scope.income) {

        		if( input === 'gl' ||  input==='type' || input ==='amount' || input === 'desc' || input ==='project'){
        			if (!!$scope.incomeForm[input].$error.required) {
        				$scope.incomeForm[input].$setDirty(true);
        				formStatus = false;
        			}
        		}
        	}

        	return formStatus;
        }




        $scope.createIncome = function(){
        	if ($scope.validateCreate()) {
        		toastr.info("'info', 'Loading!', 'Please wait.'")
        		$http({
        			method: 'post',
        			url: $rootScope.BaseUrl+'expense',
        			data:$scope.income
        		}).then(function (response) {
        			$scope.income=null;
        			toastr.success("Amount Added..!!") 

        		}, function (response) {
        			swal({
        				title: response.data.heading,
        				text: response.data.message,
        				html:true,
        				type: 'error'
        			}); 
        			toastr.error("Amount could not be Added!!")
        		});
        	}

        	else{
        		toastr.error("Please Fill required field!")

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

        $scope.getAllGlList= function (id)
        {
            console.log('p-id',id);
            $http({
              method: 'get',
              url: $rootScope.BaseUrl+'glByProjectId/' +id +'/' +'100',
          }).then(function (response) {
              $scope.gls= response.data;
          }, 
          function (response) {               

          });
      }
      
      initSelect2Dropdown();  

  });
}]);
