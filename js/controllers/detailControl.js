(function() {
    'use strict';
    
    angular
    .module('instagram')
    .controller('DetailController', function(API, $stateParams) {
       var vm = this;

       //adds a like to the image when the heart is clicked on the image 
       //detail page
        vm.heartImage= function(image){
          var like = API.heartImage(image._id);
          like.then(function(response){
          image.likes ++;
            
          });
        };

        //gets the image details from the api when the thumbnail is clicked
        //on the homepage  
        var imageDetails = API.getImageDetails($stateParams.imageid);

        imageDetails.then(function(results){
       		vm.image = results.data;
       }); 


      
    });
})();