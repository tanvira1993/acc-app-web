/* Setup Rounting For All Pages */
accountingApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    // Redirect any unmatched url
    // $urlRouterProvider.otherwise("/dashboard");

    $stateProvider
    
    //Added by Tanvir
    .state('dashboard', {
    	templateUrl: "layouts/dashboard.html",
    	controller: "DashboardController",
    	resolve: {
    		deps: ['$ocLazyLoad', function ($ocLazyLoad) {
    			return $ocLazyLoad.load({
    				name: 'accountingApp',
                    insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                    files: [
                    "ng-asset/DashboardController.js"
                    ]
                });
    		}]
    	}
    })


    .state('income', {
    	templateUrl: "layouts/income.html",
    	controller: "IncomeController",
    	resolve: {
    		deps: ['$ocLazyLoad', function ($ocLazyLoad) {
    			return $ocLazyLoad.load({
    				name: 'accountingApp',
                    insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                    files: [
                    "ng-asset/IncomeController.js"
                    ]
                });
    		}]
    	}
    })

    .state('expense', {
    	templateUrl: "layouts/expense.html",
    	controller: "ExpenseController",
    	resolve: {
    		deps: ['$ocLazyLoad', function ($ocLazyLoad) {
    			return $ocLazyLoad.load({
    				name: 'accountingApp',
                    insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                    files: [
                    "ng-asset/ExpenseController.js"
                    ]
                });
    		}]
    	}
    })

    .state('project', {
    	templateUrl: "layouts/project.html",
    	controller: "ProjectController",
    	resolve: {
    		deps: ['$ocLazyLoad', function ($ocLazyLoad) {
    			return $ocLazyLoad.load({
    				name: 'accountingApp',
                    insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                    files: [
                    "ng-asset/ProjectController.js"
                    ]
                });
    		}]
    	}
    })

    .state('setting', {
    	templateUrl: "layouts/setting.html",
    	controller: "SettingController",
    	resolve: {
    		deps: ['$ocLazyLoad', function ($ocLazyLoad) {
    			return $ocLazyLoad.load({
    				name: 'accountingApp',
                    insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                    files: [
                    "ng-asset/SettingController.js"
                    ]
                });
    		}]
    	}
    })


    .state('expenseList', {
        templateUrl: "layouts/expenseList.html",
        controller: "ExpenseListController",
        resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name: 'accountingApp',
                    insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                    files: [
                    "ng-asset/ExpenseListController.js"
                    ]
                });
            }]
        }
    })

    .state('incomeList', {
        templateUrl: "layouts/incomeList.html",
        controller: "IncomeListController",
        resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name: 'accountingApp',
                    insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                    files: [
                    "ng-asset/IncomeListController.js"
                    ]
                });
            }]
        }
    })

    .state('projectList', {
        templateUrl: "layouts/projectList.html",
        controller: "ProjectListController",
        resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name: 'accountingApp',
                    insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                    files: [
                    "ng-asset/ProjectListController.js"
                    ]
                });
            }]
        }
    })

    .state('projectDetails', {
        url: "/projectDetails?id",
        templateUrl: "layouts/projectDetails.html",
        controller: "ProjectDetailsController",
        resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name: 'accountingApp',
                    insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                    files: [
                    "ng-asset/ProjectDetailsController.js"
                    ]
                });
            }]
        }
    })

    .state('glList', {
        
        templateUrl: "layouts/glList.html",
        controller: "GlListController",
        resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name: 'accountingApp',
                    insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                    files: [
                    "ng-asset/GlListController.js"
                    ]
                });
            }]
        }
    })

    

}]);
