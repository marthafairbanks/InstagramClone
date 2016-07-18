(function () {
	'use strict';
	angular
		.module('instagram')
		 .factory('API', function($http) {
		 	
		 	var postImages = function(data) {
		 		var postImages = $http({
				  method: 'POST',
				  data:data,
				  headers: {
				  	'X_CSRF_TOKEN':'martha',
				  },
				  url: "http://instagramcloneclass.herokuapp.com/image/post",
				});

				return postImages;

		 	};

		 	var getImages = function(){

		 		var getImages = $http({
				  method: 'GET',
				  headers: {
				  	'X_CSRF_TOKEN':'martha',
				  },
				  url: "http://instagramcloneclass.herokuapp.com/images"
				});

				return getImages;
		 	};

		 	var getImageDetails = function(id) {
		 		var getImages = $http({
				  method: 'GET',
				  headers: {
				  	'X_CSRF_TOKEN':'martha',
				  },
				  url: "http://instagramcloneclass.herokuapp.com/images/"+id
				});

				return getImages;
		 	};
		 	
		 	return {
		 		postImages:postImages,
		 		getImages:getImages,
		 		getImageDetails:getImageDetails,
		 	};

		 
		 });
})();