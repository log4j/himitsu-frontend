(function () {

    angular
        .module('himitsuApp')
        .factory('userService', function ($http, $localStorage) {


            var userService = this;

            userService.userId = null;



            userService.postLogin = function (data) {
                console.log(data);
                
                return $http.post(host+'/login', data)
                .then(function(res){
                    console.log(res.data.id);
                    
                    if(res.data){




                        userService.userId = res.data.id;

                        $localStorage.userId = res.data.id;

                        return res.data;
                        
                    }else{
                        return {result: false};
                    }
                });
                
            };

            userService.loadUser = function(){
                return $http.get('host/user/'+$localStorage.userId)
                    .then(function(res){
                        if(res.data){
                            if(res.data.result){
                                $localStorage.user = res.data.data;
                            }

                            return res.data;
                        }else{
                            return {result:false};
                        }
                    })
            };


            userService.getUserId = function(){
                return $localStorage.userId;
            };
            
            userService.getUser = function(){
                return $localStorage.user;
            };

            userService.searchUserByFirstName = function (keyword) {
                if (!keyword)
                    keyword = "";
                return $http.get(host+'/user?firstName=' + keyword)
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