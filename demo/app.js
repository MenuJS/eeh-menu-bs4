(function () {
    'use strict';
    angular.module('myApp', [
        'eehMenuBs4',
        'ui.bootstrap',
        'ui.router'
    ]);

    angular.module('myApp')
    .config(['eehMenuProvider', function (eehMenuProvider) {
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
            href: '#'
        })
        .menuItem('bar.menuItem2', {
            text: 'Menu Item 2',
            href: '#'
        })
        .menuItem('bar.menuItem3', {
            text: 'Menu Item 3',
            href: '#'
        });
    }]);

    angular.module('myApp').controller('appController', function ($scope) {
        $scope.isNavbarCollapsed = true;
    });
})();
