(function () {

    angular
        .module('himitsuApp')
        .factory('userService', function ($http) {


            var userService = this;

            this.postLogin = function (data) {
                console.log(data);
                
                return $http.post('http://localhost:4000/login', data)
                .then(function(res){
                    console.log(res.data.id);
                    
                    if(res.data){
                        
                        return res.data;
                        
                    }else{
                        return {result: false};
                    }
                });
                
            };


            this.searchUserByFirstName = function (keyword) {
                if (!keyword)
                    keyword = "";
                return $http.get('http://localhost:4000/user?firstName=' + keyword)
                    .then(function (res) {

                        if (res.data)

                            return res.data;
                        else
                            return {
                                result: false,
                                data: null,
                                err: 'NO_DATA'
                            };


                    }, function (res) {
                        return {
                            result: false,
                            data: 'error'
                        }
                    });
            }

            return this;
        });

})();