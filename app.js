(function () {


    //    var host = 'http://localhost:4000';
    angular.module('himitsuApp', [
        'ui.bootstrap', 'ui.router', 'ngStorage'
    ])
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/login');
            $stateProvider
                .state('login', {
                    url: '/login',
                    controller: 'AccountController',
                    templateUrl: '/views/login.html'

                })
                .state('createUser', {
                    url: '/user',
                    controller: 'signupController',
                    templateUrl: '/views/signup.html'
                })
                .state('secret', {
                    url: '/secret',
                    controller: 'secretController',
                    templateUrl: '/views/secret.html'
                });
        
        })
        .config(['$httpProvider', function ($httpProvider) {
            $httpProvider.defaults.withCredentials = true;
        }]);
})();