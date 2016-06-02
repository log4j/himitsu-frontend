(function () {
    angular
        .module('himitsuApp')
        .factory('signupService', function ($http) {

            var signupService = this;
            
            this.postSignup = function (data) {
                console.log(data);

                return $http.post('http://localhost:4000/user', data)
                    .then(function(res){
                        console.log(res.data);

                        if(res.data){

                            return res.data;

                        }else{
                            return {result: false};
                        }
                    });

            };
        });
    
});