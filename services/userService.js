(function(){
    
    angular.module('himitsuApp')
    .factory(
        'userService',function($http){            
            
        
            var userService = this;
            
            
            this.users = ['sdfsdf','sdfewf','sdfwef'];
            
            this.randomNumber = function(size){
                var list = [];
                for(var i=0;i<size;i++){
                    list.push(parseInt(Math.random()*100));   
                }
                
                return list;
            }
            
            
            this.searchUserByFirstName = function(keyword){
                if(!keyword)
                    keyword = "";
                return $http.get('http://localhost:4000/user?firstName='+keyword)
                .then(function(res){
                    
                    if(res.data)
                    
                        return res.data;
                    else
                        return {result: false, data:null, err: 'NO_DATA'};
                    
                    
                },function(res){
                    return {result: false, data:'error'}
                });
            }
            
            return this;
    });
         
})();