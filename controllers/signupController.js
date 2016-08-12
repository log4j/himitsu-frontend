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
            
            $scope.signupSubmit= function(){

                signupService.postSignup($scope.signupData)
                    .then(function(res){
                        console.log(res);
                        if(res && res.result != false){
                            // alert('OK SignUp');
                            $scope.signupData.email = '';
                            $scope.signupData.password1 = '';
                            $scope.signupData.password2 = '';
                            
                            console.log(res);

                            $state.go('login');
                        }else{
                            alert(res.err.message);
                        }

                    });

            };
            
            // $scope.size = null;
            
            // $scope.users = []

    });
        
})();