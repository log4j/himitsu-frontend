(function(){
    
    angular.module('himitsuApp')
    .controller(
        'AccountController',function($state, $scope){
        console.log('djafjdh');
            
            
            $scope.loginData = {
                email:'xyz',
                password:''
            };
            
            $scope.loginSubmit = function(){
                console.log($scope.loginData);
            
            
            
            }
    });
    
    
    
})();