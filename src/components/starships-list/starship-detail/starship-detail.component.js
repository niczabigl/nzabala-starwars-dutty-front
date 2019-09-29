(function () {
  'use strict'
  angular
    .module('app')
    .component('starshipDetail', {
      controller: StarshipDetailController,
      templateUrl: './components/starships-list/starship-detail/starship-detail.component.html',
      bindings: {
        starship: '<'
      }
    })
  function StarshipDetailController () {
    var ctrl = this

    ctrl.$onInit = function () {

    }
  }
})()
