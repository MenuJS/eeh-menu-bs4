'use strict';

/**
 * @ngdoc directive
 * @name eeh-menu-bs4-collapsed-content
 * @restrict AE
 *
 * @description
 * This directive allows for the creation of a Twitter Bootstrap collapsed content component, useful in combination with a navbar.
 *
 * @param {string=} isCollapsed The value of this variable is toggled by the hamburger button.
 * @param {string=} [navContainerClass=bg-inverse p-a] Sets the ng-class attribute of the top-level nav element.
 */
var CollapsedContentDirective = function () {
    return {
        restrict: 'AE',
        templateUrl: 'template/eeh-menu-bs4/collapsed-content/collapsed-content.html',
        transclude: true,
        scope: {
            navContainerClass: '=?',
            isCollapsed: '=?'
        },
        link: function (scope) {
            scope.navContainerClass = scope.navContainerClass || 'bg-inverse p-a';
            scope.isCollapsed = scope.isCollapsed || true;
        }
    };
};

/** @ngInject */
angular.module('eehMenuBs4').directive('eehMenuBs4CollapsedContent', CollapsedContentDirective);

