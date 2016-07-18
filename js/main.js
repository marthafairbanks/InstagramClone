(function() {
    'use strict';
    angular
        .module('instagram', ['ui.router'])
        .config(function($stateProvider, $urlRouterProvider) {

	  	$urlRouterProvider.otherwise("/");

	  	$stateProvider
	    .state('home', {
      	url: '/',
      	views: {
      		'main': {
		        templateUrl: '../views/home.html',
		        controller: 'MainController',
		        controllerAs: 'controller'
		      }
		  },
		})

	    .state('detail', {
      	url: '/detail/:imageid',
      	views: {
      		'main': {
		        templateUrl: '../views/detail.html',
		        controller: 'DetailController',
		        controllerAs: 'controller'
		      }
		  },
	    })

	    .state('addedit', {
      	url: '/addedit',
      	views: {
      		'main': {
		        templateUrl: '../views/addedit.html',
		        controller: 'AddEditController',
		        controllerAs: 'controller'
		      }
		  },
	    });	    


	});
})();


