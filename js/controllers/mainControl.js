(function() {
    'use strict';
    
    angular
    .module('instagram')
    .controller('MainController', function(API) {
       var vm = this;

        // get the image thumb nails from the api for the homepage
        var imageData = API.getImages();

       	imageData.then(function(results){
       		var images = results.data.images;
       		vm.images = images;

        });
        
        //adds a like to the image when the heart is clicked on the homepage
        vm.heartImage= function(image){
          var like = API.heartImage(image._id);
          like.then(function(response){
          image.likes ++;
            
          });

        };
      
    });
})();