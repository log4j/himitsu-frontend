(function(){
    
    angular.module('himitsuApp')
    .controller(
        'secretController',function($state, $scope,secretService){            
            
            console.log('hksahfkl');
            $scope.secretData = {
                content:'',
                isPublic:''
            };
            
            $scope.secretSubmit = function(){
                console.log($scope.secretData);
            
            }
    });
        
})();