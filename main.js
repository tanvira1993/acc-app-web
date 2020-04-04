var accountingApp = angular.module("accountingApp", [
	"ui.router",	
	"oc.lazyLoad",
	"ui.bootstrap",
	]); 
/********************************************
 END: BREAKING CHANGE in AngularJS:
 *********************************************/

 /* Setup App Interceptors */
//  accountingApp.config(['$httpProvider', function($httpProvider) {
//  	$httpProvider.interceptors.push('MaxInterceptor');

//  }]);

//  accountingApp.factory('MaxInterceptor', ['$rootScope','$q', function ($rootScope,$q) {
//  	var interceptor = {
//  		request: function(config) {
//  			config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
//  			if (!!$rootScope.token) {
//  				config.headers.Token = 'Bearer '+ 'kochu '+$rootScope.token;
//  				config.headers.idUser = $rootScope.idUser;
//  				config.headers.idUserRole = $rootScope.idUserRole;
//  				config.headers.idProject = $rootScope.idProject;

//  			}

//  			if (config.method === 'POST') {
//  				config.data = $.param(config.data);
//  			}
//  			return config;
//  		},
//  		response: function(response) {
//  			return response;
//  		},
//  		responseError: function(response, error) {
//  			return $q.reject(response);
//  		}
//  	};
//  	return interceptor;
//  }]);

/* Setup App Main Controller */
accountingApp.controller('AppController', ['$scope', '$rootScope', '$location', '$timeout', '$http','$stateParams','$window',function($scope, $rootScope, $location, $timeout, $http,$stateParams,$window) {
	$scope.$on('$viewContentLoaded', function() {

	});
}]);

/* Setup App run functions*/
accountingApp.run(['$rootScope', '$http','$state','$window', '$filter', '$location',
	function($rootScope, $http, $state,$window, $filter,$location) {
		console.log('hello from template main js')

		$rootScope.loginInfo = {
			password: null
		};

		// $rootScope.BaseUrl = 'http://localhost:3070/'
		$rootScope.BaseUrl = 'https://acc-app-server.herokuapp.com/'
		$rootScope.token = null
		$rootScope.login = function(){

			if($rootScope.loginInfo.password == 'hello123hello'){
				$rootScope.token = 'hello set'
			}
			else {
				toastr.error("Credentials Invalid!")
				$rootScope.token = null	 
			}
		}
		//https://stackoverflow.com/questions/20508898/how-can-i-import-a-sql-file-into-my-heroku-postgres-database
		//heroku pg:psql --app YOUR_APP_NAME_HERE < updates.sql // upload sql file
	}]);
