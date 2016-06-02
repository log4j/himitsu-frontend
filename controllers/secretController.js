(function(){
    
    angular.module('himitsuApp')
    .controller(
        'secretController',function($state, $scope,secretService, userService, $localStorage){
            
            $scope.secretData = [];

            $scope.secretOne = {
                content:'',
                isPublic: true,
                owner:$localStorage.user._id

            };

            $scope.getSecretList= function () {
                
                secretService.getSecret($scope.secretData)
                    .then(function (res) {
                        if(res){
                            $scope.secretData = res;
                        }else{
                            alert(res.err);
                        }
                    });

            };


            $scope.getSecretList();

            $scope.userId = userService.getUserId();

            $scope.user = $localStorage.user;

            $scope.createSecret = function () {

                secretService.postSecret($scope.secretOne)
                    .then(function (res) {

                        if(res){
                            alert('OK');
                            $scope.secretOne.content = '';
                            $scope.getSecretList();

                        }else {

                            alert(res.err);
                        }
                });
            };


            $scope.logout = function(){
                $localStorage.$reset();
                $state.go('login');
            };


            
    });
        
})();