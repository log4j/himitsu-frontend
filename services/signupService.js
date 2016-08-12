(function () {
    angular
        .module('himitsuApp')
        .factory('signupService', function ($HOST,$http) {

            var signupService = this;
            
            signupService.postSignup = function (data) {
                console.log(data);

                return $http.post($HOST.url+'/user', data)
                    .then(function(res){

                        console.log('sign up post!!!');

                        console.log(res.data);
                        
                        if(res.data){

                            console.log(res);
                            
                            return res.data;

                        }else{

                            return {result: false};
                        };
                    });

            };

            return this;
        });
    
});