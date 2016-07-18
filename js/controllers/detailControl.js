(function() {
    'use strict';
    
    angular
    .module('instagram')
    .controller('DetailController', function(API, $stateParams) {
       var vm = this;

        vm.heartImage= function(image){
          var like = API.heartImage(image._id);
          like.then(function(response){
          image.likes ++;
            
          });

        };

       var imageDetails = API.getImageDetails($stateParams.imageid);

       imageDetails.then(function(results){
       		vm.image = results.data;
       }); 


      
    });
})();