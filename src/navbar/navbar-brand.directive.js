'use strict';

/**
 * @ngInject
 * @ngdoc directive
 * @name eeh-menu-bs4-navbar-brand
 * @restrict AE
 *
 * @description
 * This directive allows for the creation of a Twitter Bootstrap navbar brand element.
 *
 * @param {string=} text Sets the text of the brand element.
 * @param {string=} state Sets ui-sref of the brand element.
 * @param {string=} href Sets the href attribute of the brand element.
 * @param {string=} target Sets target attribute of the brand element.
 * @param {string=} src Sets the src attribute of the image in the brand element.
 * @param {function=} click Sets the callback function of the brand element.
 */
function NavbarBrandDirective() {
    return {
        restrict: 'AE',
        templateUrl: 'template/eeh-menu-bs4/navbar/navbar-brand.html',
        scope: {
            text: '=',
            state: '=',
            href: '=',
            target: '=',
            src: '=',
            click: '='
        }
    };
}

angular.module('eehMenuBs4').directive('eehMenuBs4NavbarBrand', NavbarBrandDirective);
