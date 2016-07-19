(function() {
    'use strict';
    
    angular
    .module('instagram')
    .controller('AddEditController', function(API) {
       var vm = this;

       //submits new images with title and description to the api when 
       // the form is submitted & clears form.
        vm.submit = function(){
        var postImages = API.postImages(vm.form);

        postImages.then(function(response) {
          console.log(response);

          vm.form = [];
        });
       };
      
    });
})();