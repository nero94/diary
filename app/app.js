'use strict';

// Declare app level module which depends on views, and components
angular.module('diaryApp', [
    'ngRoute',
    'ngMaterial',
    'ngMessages',
    'ngAria',

    //custom modules
    'home'
])
    .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider
            .when('/home', {
                templateUrl: 'home/home.html',
                controller: 'HomeController'
            })
            .otherwise({redirectTo: '/home'});
    }]);
