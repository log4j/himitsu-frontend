(function(){
    'use strict';
    
    angular
        .module('himitsuApp')
        .controller(
        'AccountController',function($state, $scope, userService){            
                
            $scope.loginData = {
                email:'yangmang@gwu.edu',
                password:'123'
            };
            
            $scope.loginSubmit = function(){
                userService.postLogin($scope.loginData)
                .then(function(res){
                    if(res.result){
                        //alert('OK'); 
                        
                        $state.go('secret');
                    }else{
                        alert(res.err.message);
                    }
                    
                });
                
            };
            
            
            $scope.size = null;
            
            $scope.users = [];
            
            
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