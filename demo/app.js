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
            iconClass: 'fa-home',
            href: '/'
        })
        .menuItem('foo.user', {
            text: 'Me',
            iconClass: 'fa-user'
        })
        .menuItem('foo.user.profile', {
            text: 'User Profile',
            iconClass: 'fa-user',
            href: '/user-profile'
        });
    }]);

    angular.module('myApp').controller('appController', function ($scope) {
        $scope.isNavbarCollapsed = true;
    });
})();
