'use strict';

/**
 * @ngdoc directive
 * @name eeh-menu-bs4-navbar
 * @restrict AE
 *
 * @description
 * This directive allows for the creation of a Twitter Bootstrap v4 navbar component.
 *
 * @param {string=} menuName Sets the name of the menu that the directive will render.
 * @param {string=} [navClass=navbar-default navbar-static-top] Sets the ng-class attribute of the top-level nav element.
 * @param {string=} brandText Sets the text of the brand element.
 * @param {string=} brandState Sets ui-sref of the brand element.
 * @param {string=} brandHref Sets the href attribute of the brand element.
 * @param {string=} brandTarget Sets target attribute of the brand element.
 * @param {string=} brandSrc Sets the src attribute of the image in the brand element.
 * @param {function=} brandClick Sets the callback function of the brand element.
 * @param {function=} collapsedTargetId Sets the data target of the navbar-toggler.
 */
var NavbarDirective = function (eehMenu) {
    return {
        restrict: 'AE',
        templateUrl: 'template/eeh-menu-bs4/navbar/navbar.html',
        scope: {
            menuName: '=',
            navClass: '=?',
            brandText: '=',
            brandState: '=',
            brandHref: '=',
            brandTarget: '=',
            brandSrc: '=',
            brandClick: '=',
            isCollapsed: '='
        },
        link: function (scope) {
            scope.iconBaseClass = function () {
                return eehMenu.iconBaseClass();
            };
            scope.navClass = scope.navClass || 'navbar-default navbar-static-top';
            scope.$watch(eehMenu.menuItems, function () {
                if (angular.isUndefined(scope.menuName)) {
                    return;
                }
                var menuItems = eehMenu.menuItemTree(scope.menuName);
                scope.leftNavbarMenuItems = menuItems.filter(function (item) {
                    return !item.isHeavy();
                });
                scope.rightNavbarMenuItems = menuItems.filter(function (item) {
                    return item.isHeavy();
                });
            }, true);
        }
    };
};

/** @ngInject */
angular.module('eehMenuBs4').directive('eehMenuBs4Navbar', NavbarDirective);
