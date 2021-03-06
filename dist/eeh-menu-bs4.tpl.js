angular.module('eehMenuBs4').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('template/eeh-menu-bs4/collapsed-content/collapsed-content.html',
    "<div uib-collapse=\"isCollapsed\">\n" +
    "    <div ng-class=\"navContainerClass\">\n" +
    "        <ng-transclude></ng-transclude>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('template/eeh-menu-bs4/nav/nav.html',
    "<ul class=\"nav\" ng-class=\"navClass\">\n" +
    "    <li class=\"nav-item\"\n" +
    "        ng-repeat=\"item in menuItems | orderBy:'weight'\"\n" +
    "        ng-include=\"'template/eeh-menu/nav-bs4-menu-item.html'\"\n" +
    "        ng-if=\"item.isVisible()\"\n" +
    "        uib-dropdown\n" +
    "        eeh-menu-active-menu-item=\"item\"></li>\n" +
    "</ul>\n" +
    "\n" +
    "<script type=\"text/ng-template\" id=\"template/eeh-menu/nav-bs4-menu-item.html\">\n" +
    "    <a class=\"nav-link\"\n" +
    "       ng-if=\"!item.isDivider && item.state\"\n" +
    "       ui-sref=\"{{ item.state }}\"\n" +
    "       ui-sref-active-eq=\"active\">\n" +
    "        <span eeh-menu-menu-item-content=\"item\"></span>\n" +
    "    </a>\n" +
    "    <a class=\"nav-link\" ng-if=\"item.click\" ng-click=\"item.click()\">\n" +
    "        <span eeh-menu-menu-item-content=\"item\"></span>\n" +
    "    </a>\n" +
    "    <a class=\"nav-link\" ng-if=\"item.href\" ng-href=\"{{item.href}}\" target=\"{{item.target ? item.target : '_self'}}\">\n" +
    "        <span eeh-menu-menu-item-content=\"item\"></span>\n" +
    "    </a>\n" +
    "    <a class=\"nav-link\" ng-if=\"item.hasChildren()\" uib-dropdown-toggle>\n" +
    "        <span class=\"icon-fw {{ iconBaseClass() }} {{ item.iconClass }}\"></span>\n" +
    "        <span> {{ item.text|translate }}</span>\n" +
    "        <span class=\"caret\"></span>\n" +
    "    </a>\n" +
    "    <ul ng-if=\"item.hasChildren()\" uib-dropdown-menu>\n" +
    "        <li class=\"nav-item dropdown-item\"\n" +
    "            ng-repeat=\"item in item.children()|orderBy:'weight'\"\n" +
    "            ng-class=\"{'dropdown-divider': item.isDivider}\"\n" +
    "            ng-include=\"'template/eeh-menu/navbar-bs4-menu-item.html'\"\n" +
    "            ng-if=\"item.isVisible()\"></li>\n" +
    "    </ul>\n" +
    "</script>\n"
  );


  $templateCache.put('template/eeh-menu-bs4/navbar/navbar-brand.html',
    "<a ng-if=\"state && !href && (text || src)\"\n" +
    "   class=\"navbar-brand\"\n" +
    "   ng-click=\"click()\"\n" +
    "   ui-sref=\"{{ state }}\">\n" +
    "    <span ng-include=\"'template/eeh-menu-bs4/navbar-brand-content.html'\"></span>\n" +
    "</a>\n" +
    "\n" +
    "<a ng-if=\"!state && href && (text || src)\"\n" +
    "   class=\"navbar-brand\"\n" +
    "   ng-click=\"click()\"\n" +
    "   ng-href=\"{{ href }}\"\n" +
    "   target=\"{{ target ? target : '_self'}}\">\n" +
    "    <span ng-include=\"'template/eeh-menu-bs4/navbar-brand-content.html'\"></span>\n" +
    "</a>\n" +
    "\n" +
    "<span ng-if=\"!state && !href && (text || src)\"\n" +
    "      ng-click=\"click()\"\n" +
    "      class=\"navbar-brand\">\n" +
    "    <span ng-include=\"'template/eeh-menu-bs4/navbar-brand-content.html'\"></span>\n" +
    "</span>\n" +
    "\n" +
    "<script type=\"text/ng-template\" id=\"template/eeh-menu-bs4/navbar-brand-content.html\">\n" +
    "    <img ng-if=\"src\" ng-src=\"{{ src }}\">\n" +
    "    <span ng-if=\"text\">{{ text|translate }}</span>\n" +
    "</script>\n" +
    "\n"
  );


  $templateCache.put('template/eeh-menu-bs4/navbar/navbar.html',
    "<nav class=\"navbar eeh-menu eeh-menu-navbar\" ng-class=\"navClass\">\n" +
    "    <button class=\"navbar-toggler pull-right\" type=\"button\" ng-click=\"isCollapsed = !isCollapsed\">\n" +
    "        &#9776;\n" +
    "    </button>\n" +
    "    <eeh-menu-bs4-navbar-brand text=\"brandText\"\n" +
    "                               state=\"brandState\"\n" +
    "                               href=\"brandHref\"\n" +
    "                               target=\"brandTarget\"\n" +
    "                               src=\"brandSrc\"\n" +
    "                               click=\"brandClick\">\n" +
    "    </eeh-menu-bs4-navbar-brand>\n" +
    "    <div class=\"collapse navbar-toggleable-xs\">\n" +
    "        <ul class=\"nav navbar-nav\">\n" +
    "            <li class=\"nav-item\"\n" +
    "                ng-repeat=\"item in leftNavbarMenuItems | orderBy:'weight'\"\n" +
    "                ng-include=\"'template/eeh-menu/navbar-bs4-menu-item.html'\"\n" +
    "                ng-if=\"item.isVisible()\"\n" +
    "                uib-dropdown\n" +
    "                ui-sref-active-eq=\"active\"\n" +
    "                eeh-menu-active-menu-item=\"item\"></li>\n" +
    "        </ul>\n" +
    "        <ul class=\"nav navbar-nav pull-left\">\n" +
    "            <li class=\"nav-item\"\n" +
    "                ng-repeat=\"item in rightNavbarMenuItems | orderBy:'weight'\"\n" +
    "                ng-include=\"'template/eeh-menu/navbar-bs4-menu-item.html'\"\n" +
    "                ng-if=\"item.isVisible()\"\n" +
    "                uib-dropdown\n" +
    "                ui-sref-active-eq=\"active\"\n" +
    "                eeh-menu-active-menu-item=\"item\"></li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "</nav>\n" +
    "\n" +
    "<script type=\"text/ng-template\" id=\"template/eeh-menu/navbar-bs4-menu-item.html\">\n" +
    "    <a class=\"nav-link\" ng-if=\"!item.isDivider && item.state\" ui-sref=\"{{ item.state }}\">\n" +
    "        <span eeh-menu-menu-item-content=\"item\"></span>\n" +
    "    </a>\n" +
    "    <a class=\"nav-link\" ng-if=\"item.click\" ng-click=\"item.click()\">\n" +
    "        <span eeh-menu-menu-item-content=\"item\"></span>\n" +
    "    </a>\n" +
    "    <a class=\"nav-link\" ng-if=\"item.href\" ng-href=\"{{item.href}}\" target=\"{{item.target ? item.target : '_self'}}\">\n" +
    "        <span eeh-menu-menu-item-content=\"item\"></span>\n" +
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
    "            ng-include=\"'template/eeh-menu/navbar-bs4-menu-item.html'\"\n" +
    "            ng-if=\"item.isVisible()\"\n" +
    "            ui-sref-active-eq=\"active\"></li>\n" +
    "    </ul>\n" +
    "</script>\n"
  );

}]);
