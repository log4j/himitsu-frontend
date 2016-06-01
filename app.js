(function () {

    angular.module('himitsuApp', [
        'ui.bootstrap', 'ui.router'
    ])
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/login');
            $stateProvider
                .state('login', {
                    url: '/login',
                    controller: 'AccountController',
                    templateUrl: '/views/login.html'

                })
                .state('signup', {
                    url: '/signup',
                    controller: 'signupController',
                    templateUrl: '/views/signup.html'
                })
                .state('secret', {
                    url: '/secret',
                    controller: 'secretController',
                    templateUrl: '/views/secret.html'
                });
        });
})();