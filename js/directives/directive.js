(function() {
    'use strict';
    
    angular
    .module('instagram')
	.directive('new', function (API) {
	  return {
	    restrict: 'E',
	    scope:[],
	    template:"",
	    link: function (scope, element, attrs) { 
	    	var vm = scope;
	    }
	  };
	});
})();
