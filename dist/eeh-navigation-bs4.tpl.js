angular.module('eehNavigationBs4').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('template/eeh-navigation-bs4/collapsed-content/collapsed-content.html',
    "<div uib-collapse=\"isCollapsed\">\n" +
    "    <div ng-class=\"navContainerClass\">\n" +
    "        <ng-transclude></ng-transclude>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('template/eeh-navigation-bs4/navbar/navbar.html',
    "<nav class=\"navbar eeh-navigation eeh-navigation-navbar\" ng-class=\"navClass\" style=\"background-color: #e3f2fd;\">\n" +
    "    <button class=\"navbar-toggler pull-right\" type=\"button\" ng-click=\"isCollapsed = !isCollapsed\">\n" +
    "        &#9776;\n" +
    "    </button>\n" +
    "    <eeh-navigation-navbar-brand text=\"brandText\"\n" +
    "                                 state=\"brandState\"\n" +
    "                                 href=\"brandHref\"\n" +
    "                                 target=\"brandTarget\"\n" +
    "                                 src=\"brandSrc\"\n" +
    "                                 click=\"brandClick\"></eeh-navigation-navbar-brand>\n" +
    "    <div class=\"collapse navbar-toggleable-xs\">\n" +
    "        <ul class=\"nav navbar-nav\">\n" +
    "            <li class=\"nav-item\"\n" +
    "                ng-repeat=\"item in leftNavbarMenuItems | orderBy:'weight'\"\n" +
    "                ng-include=\"'template/eeh-navigation/navbar-bs4-menu-item.html'\"\n" +
    "                ng-if=\"item._isVisible()\"\n" +
    "                dropdown\n" +
    "                ui-sref-active-eq=\"active\"\n" +
    "                eeh-navigation-active-menu-item=\"item\"></li>\n" +
    "        </ul>\n" +
    "        <ul class=\"nav navbar-nav pull-left\">\n" +
    "            <li class=\"nav-item\"\n" +
    "                ng-repeat=\"item in rightNavbarMenuItems | orderBy:'weight'\"\n" +
    "                ng-include=\"'template/eeh-navigation/navbar-bs4-menu-item.html'\"\n" +
    "                ng-if=\"item._isVisible()\"\n" +
    "                uib-dropdown\n" +
    "                ui-sref-active-eq=\"active\"\n" +
    "                eeh-navigation-active-menu-item=\"item\"></li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "</nav>\n" +
    "\n" +
    "<script type=\"text/ng-template\" id=\"template/eeh-navigation/navbar-bs4-menu-item.html\">\n" +
    "    <a class=\"nav-link\" ng-if=\"!item.isDivider && item.state\" ui-sref=\"{{ item.state }}\">\n" +
    "        <span eeh-navigation-menu-item-content=\"item\"></span>\n" +
    "    </a>\n" +
    "    <a class=\"nav-link\" ng-if=\"item.click\" ng-click=\"item.click()\">\n" +
    "        <span eeh-navigation-menu-item-content=\"item\"></span>\n" +
    "    </a>\n" +
    "    <a class=\"nav-link\" ng-if=\"item.href\" ng-href=\"{{item.href}}\" target=\"{{item.target ? item.target : '_self'}}\">\n" +
    "        <span eeh-navigation-menu-item-content=\"item\"></span>\n" +
    "    </a>\n" +
    "    <a class=\"nav-link\" ng-if=\"item.hasChildren()\" uib-dropdown-toggle>\n" +
    "        <span class=\"icon-fw {{ iconBaseClass() }} {{ item.iconClass }}\"></span>\n" +
    "        <span> {{ item.text|translate }}</span>\n" +
    "        <span class=\"caret\"></span>\n" +
    "    </a>\n" +
    "    <ul ng-if=\"item.hasChildren()\" uib-dropdown-menu>\n" +
    "        <li class=\"dropdown-item\"\n" +
    "            ng-repeat=\"item in item.children()|orderBy:'weight'\"\n" +
    "            ng-class=\"{'dropdown-divider': item.isDivider}\"\n" +
    "            ng-include=\"'template/eeh-navigation/navbar-bs4-menu-item.html'\"\n" +
    "            ng-if=\"item._isVisible()\"\n" +
    "            ui-sref-active-eq=\"active\"></li>\n" +
    "    </ul>\n" +
    "</script>\n"
  );

}]);
