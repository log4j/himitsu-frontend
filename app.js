(function(){
    
    angular.module('himitsuApp',[
        'ui.bootstrap','ui.router'
    ])
    .config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/login');
        $stateProvider
            .state('login',{
                url:'/login',
                controller:'AccountController',
                templateUrl:'/views/login.html'
            })
    })
    
    
    
})();