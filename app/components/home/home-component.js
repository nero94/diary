'use strict';

angular.module('diaryApp', []).component('home', {
    templateUrl: 'components/home/home.html',
    controller: HomeController
});

function HomeController() {
    this.$onInit = function () {
        console.log('HomeController initialized!');
    };
}