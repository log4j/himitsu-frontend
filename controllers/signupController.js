(function(){
    
    angular.module('himitsuApp')
    .controller(
        'signupController',function($state, $scope, signupService){            
            
            $scope.signupData = {
                image:'',
                email:'',
                password1:'',
                password2:'',
                firstname:'',
                lastname:'',
                name:'',
                gender:''
            };
            
            $scope.signupSubmit = function(){
                signupService.postSignup($scope.signupData)
                    .then(function(res){
                    console.lo
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