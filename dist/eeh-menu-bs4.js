(function(exports, global) {
    "use strict";
    angular.module("eehMenuBs4", [ "eehMenu" ]);
    "use strict";
    var CollapsedContentDirective = function() {
        return {
            restrict: "AE",
            templateUrl: "template/eeh-menu-bs4/collapsed-content/collapsed-content.html",
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
    angular.module("eehMenuBs4").directive("eehMenuBs4CollapsedContent", CollapsedContentDirective);
    "use strict";
    var NavbarDirective = function(eehMenu) {
        return {
            restrict: "AE",
            templateUrl: "template/eeh-menu-bs4/navbar/navbar.html",
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
                    return eehMenu.iconBaseClass();
                };
                scope.navClass = scope.navClass || "navbar-default navbar-static-top";
                scope.$watch(eehMenu.menuItems, function() {
                    if (angular.isUndefined(scope.menuName)) {
                        return;
                    }
                    var menuItems = eehMenu.menuItemTree(scope.menuName);
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
    NavbarDirective.$inject = [ "eehMenu" ];
    angular.module("eehMenuBs4").directive("eehMenuBs4Navbar", NavbarDirective);
    global["eeh-menu-bs4"] = exports;
})({}, function() {
    return this;
}());