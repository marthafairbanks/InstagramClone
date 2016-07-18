(function() {
    'use strict';
    
    angular
    .module('instagram')
    .controller('MainController', function(API) {
       var vm = this;

        var imageData = API.getImages();

       	imageData.then(function(results){
       		var images = results.data.images;
       		vm.images = images;

        });
        
        vm.heartImage= function(image){
          var like = API.heartImage(image._id);
          like.then(function(response){
          image.likes ++;
            
          });

        };
      
    });
})();