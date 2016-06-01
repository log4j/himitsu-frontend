(function(){
    
    angular.module('himitsuApp')
    .controller(
        'signupController',function($state, $scope, signupService){            
            
            $scope.signupData = {
                email:'',
                password:'',
            };
            
            $scope.signupSubmit = function(){
                console.log($scope.signupData);
            
                
            };
            
            $scope.size = null;
            
            $scope.users = []

    });
        
})();