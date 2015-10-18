(function(exports, global) {
    "use strict";
    angular.module("eehNavigationBs4", [ "eehNavigation" ]);
    "use strict";
    var CollapsedContentDirective = function() {
        return {
            restrict: "AE",
            templateUrl: "template/eeh-navigation-bs4/collapsed-content/collapsed-content.html",
            transclude: true,
            scope: {
                navContainerClass: "=?",
                isCollapsed: "=?"
            },
            link: function(scope) {
                scope.navContainerClass = scope.navContainerClass || "bg-inverse p-a";
                scope.isCollapsed = scope.isCollapsed || true;
            }
        };
    };
    angular.module("eehNavigationBs4").directive("eehNavigationCollapsedContent", CollapsedContentDirective);
    "use strict";
    var NavbarDirective = function(eehNavigation) {
        return {
            restrict: "AE",
            templateUrl: "template/eeh-navigation-bs4/navbar/navbar.html",
            scope: {
                menuName: "=",
                navClass: "=?",
                brandText: "=",
                brandState: "=",
                brandHref: "=",
                brandTarget: "=",
                brandSrc: "=",
                brandClick: "=",
                isCollapsed: "="
            },
            link: function(scope) {
                scope.iconBaseClass = function() {
                    return eehNavigation.iconBaseClass();
                };
                scope.navClass = scope.navClass || "navbar-default navbar-static-top";
                scope.$watch(eehNavigation.menuItems, function() {
                    if (angular.isUndefined(scope.menuName)) {
                        return;
                    }
                    var menuItems = eehNavigation.menuItemTree(scope.menuName);
                    scope.leftNavbarMenuItems = menuItems.filter(function(item) {
                        return !item.isHeavy();
                    });
                    scope.rightNavbarMenuItems = menuItems.filter(function(item) {
                        return item.isHeavy();
                    });
                }, true);
            }
        };
    };
    NavbarDirective.$inject = [ "eehNavigation" ];
    angular.module("eehNavigationBs4").directive("eehNavigationNavbarBs4", NavbarDirective);
    global["eeh-navigation-bs4"] = exports;
})({}, function() {
    return this;
}());