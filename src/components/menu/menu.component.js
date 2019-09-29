(function () {
  'use strict'
  angular
    .module('app')
    .component('menu', {
      controller: MenuController,
      templateUrl: './components/menu/menu.component.html',
      bindings: {}
    })

  function MenuController ($scope) {
    var ctrl = this
    ctrl.$onInit = function () {
      $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active')
        $('#sidebarCollapse').toggleClass('sidebarCollapseout')
        $('#sidebarCollapse').toggleClass('sidebarCollapsein')
      })
    }
  }
})()
