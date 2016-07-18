(function() {
    'use strict';
    
    angular
    .module('instagram')
    .controller('AddEditController', function(API) {
       var vm = this;

        vm.submit = function(){
        var postImages = API.postImages(vm.form);

        postImages.then(function(response) {
          console.log(response);
          // $location.path('blog/'+response.data.id._id);
          // $scope.$apply();

          vm.form = [];
        });
       };
      
    });
})();