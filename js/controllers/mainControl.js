(function() {
    'use strict';
    
    angular
    .module('instagram')
    .controller('MainController', function(API) {
       var vm = this;

        var imageData = API.getImages();

       	imageData.then(function(results){
       		console.log(results);
       		var images = results.data.images;
       		vm.images = images;

       });

      
    });
})();