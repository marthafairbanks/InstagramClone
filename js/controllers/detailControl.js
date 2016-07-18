(function() {
    'use strict';
    
    angular
    .module('instagram')
    .controller('DetailController', function(API, $stateParams) {
       var vm = this;


       var imageDetails = API.getImageDetails($stateParams.imageid);

       imageDetails.then(function(results){
        console.log(results);
       		vm.image = results.data;
       }); 

      
    });
})();