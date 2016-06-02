(function(){
    
    angular.module('himitsuApp')
    .controller(
        'signupController',function($state, $scope, signupService){            
            
            $scope.signupData = {
                email:'',
                password1:'',
                password2:'',
                firstname:'',
                lastname:'',
                name:''
            };
            
            $scope.signupSubmit = function(){
                signupService.postSignup($scope.signupData)
                    .then(function(res){
                        if(res.result){
                            //alert('OK');

                            $state.go('login');
                        }else{
                            alert(res.err.message);
                        }

                    });

            };
            
            $scope.size = null;
            
            $scope.users = []

    });
        
})();