'use strict';

/**
 * @ngdoc directive
 * @name eeh-menu-bs4-nav
 * @restrict AE
 *
 * @description
 * This directive allows for the creation of a Twitter Bootstrap v4 navbar component.
 *
 * @param {string=} menuName Sets the name of the menu that the directive will render.
 * @param {string=} navClass Sets the ng-class attribute of the top-level nav element.
 */
var NavDirective = function (eehMenu) {
    return {
        restrict: 'AE',
        templateUrl: 'template/eeh-menu-bs4/nav/nav.html',
        scope: {
            menuName: '=',
            navClass: '=?',
        },
        link: function (scope) {
            scope.iconBaseClass = function () {
                return eehMenu.iconBaseClass();
            };
            scope.navClass = scope.navClass || '';
            scope.$watch(eehMenu.menuItems, function () {
                if (angular.isUndefined(scope.menuName)) {
                    return;
                }
                scope.menuItems = eehMenu.menuItemTree(scope.menuName);
            }, true);
        }
    };
};

/** @ngInject */
angular.module('eehMenuBs4').directive('eehMenuBs4Nav', NavDirective);
