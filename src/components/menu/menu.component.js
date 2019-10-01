(function () {
  'use strict'
  angular
    .module('app')
    .component('menu', {
      controller: MenuController,
      templateUrl: './components/menu/menu.component.html',
      bindings: {
        loggedIn: '<'
      }
    })

  function MenuController ($scope) {
    var ctrl = this
    ctrl.showMenu = function () {
      $('#sidebar').toggleClass('active')
      $('#sidebarCollapse').toggleClass('sidebarCollapseout')
      $('#sidebarCollapse').toggleClass('sidebarCollapsein')
    }
  }
})()
