(function () {
  'use strict'

  angular
    .module('app')
    .controller('RootController', RootController)

  RootController.$inject = ['$rootScope', '$scope']
  function RootController ($rootScope, $scope) {
    var ctrl = this
    ctrl.$onInit = function () {
      ctrl.loggedIn = $rootScope.globals.currentUser
    }
  }
})()
