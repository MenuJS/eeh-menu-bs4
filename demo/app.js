(function () {
    'use strict';
    angular.module('myApp', [
        'eehMenuBs4',
        'ui.bootstrap',
        'ui.router'
    ]);

    angular.module('myApp')
    .config(['$stateProvider', 'eehMenuProvider', function ($stateProvider, eehMenuProvider) {
        $stateProvider
        .state('app', {abstract: true, template: '<ui-view></ui-view>'})
        .state('app.1', {url: '/1', template: '<h1>1</h1>'})
        .state('app.2', {url: '/2', template: '<h1>2</h1>'})
        .state('app.3', {url: '/3', template: '<h1>3</h1>'});

        eehMenuProvider
        .menuItem('foo.home', {
            text: 'Home',
            iconClass: 'glyphicon-home',
            href: '/'
        })
        .menuItem('foo.user', {
            text: 'Me',
            iconClass: 'glyphicon-user'
        })
        .menuItem('foo.user.profile', {
            text: 'User Profile',
            iconClass: 'glyphicon-user',
            href: '/user-profile'
        });

        eehMenuProvider
        .menuItem('bar.menuItem1', {
            text: 'Menu Item 1',
            state: 'app.1'
        })
        .menuItem('bar.menuItem2', {
            text: 'Menu Item 2',
            state: 'app.2'
        })
        .menuItem('bar.menuItem3', {
            text: 'Menu Item 3',
            state: 'app.3'
        });
    }]);

    angular.module('myApp').controller('appController', function ($scope) {
        $scope.isNavbarCollapsed = true;
    });
})();
