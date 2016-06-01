(function(){
    
    angular.module('himitsuApp')
    .controller(
        'secretController',function($state, $scope,secretService){
            
            $scope.secretData = [];

            $scope.getSecretList= function () {
                
                secretService.getSecret($scope.secretData)
                    .then(function (res) {
                        if(res){
                            console.log(res[0]);
                            $scope.secretData = res;
                            alert('OK');
                        }else{
                            alert(res.err);
                        }
                    });

            };
            
            
    });
        
})();