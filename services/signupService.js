(function () {
    angular
        .module('himitsuApp')
        .factory('signupService', function ($HOST,$http) {

            var signupService = this;
            
            this.postSignup = function (data) {

                return $http.post($HOST+'/user', data)
                    .then(function(res){

                        if(res.data){

                            return res.data;

                        }else{
                            return {result: false};
                        }
                    });

            };
        });
    
});