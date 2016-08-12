(function () {

    angular
        .module('himitsuApp')
        .factory('secretService', function ($HOST,$http) {


            var secretService = this;

            this.getSecret = function (data) {

                return $http.get($HOST.url+'/secret', data)
                    .then(function (res) {
                        console.log(res.data.data);

                        if (res.data.data) {

                            return res.data.data;

                        } else {
                            return {
                                result: false
                            };
                        };
                    });

            }

            this.postSecret = function (data) {

                return $http.post($HOST.url+'/secret', data)
                    .then(function (res) {

                        console.log(res.data);
                    
                        if (res.data)
                            return res.data;
                        else
                            return {
                                result: false
                            };
                    });
            };
        
            
            return this;
        });

})();