(function () {
  'use strict'
  angular
    .module('app')
    .component('starshipDetail', {
      controller: StarshipDetailController,
      templateUrl: './ships/starships-list/starship-detail/starship-detail.component.html',
      bindings: {
        starship: '<'
      }
    })
  function StarshipDetailController () {
    console.log('starship-detail', this)
    var ctrl = this

    ctrl.$onInit = function () {
      console.log('onInit', this)
    }
  }
})()
