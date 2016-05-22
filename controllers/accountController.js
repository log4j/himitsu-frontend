(function(){
    
    angular.module('himitsuApp')
    .controller(
        'AccountController',function($state, $scope, userService){            
            
            $scope.loginData = {
                email:'',
                password:''
            };
            
            $scope.loginSubmit = function(){
                console.log($scope.loginData);
            
                
            }
            
            $scope.size = null;
            
            $scope.users = []
            
            
            $scope.random = function(){
                
                userService.searchUserByFirstName($scope.size)
                .then(function(res){
                    console.log(res);
                    
                    if(res.result){
                        $scope.users = res.data;   
                    }else{
                        $scope.users = [];   
                    }
                });
                
            }
    });
        
})();