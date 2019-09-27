(function () {
  'use strict'
  angular
    .module('app')
    .component('starship-detail', {
      controller: StarshipController,
      templateUrl: './ships/starships-list/starship-detail/starship-detail.component.html',
      bindings: {
        starship: '<'
      }
    })
  function StarshipController () {
    console.log('starship-detail', this)
    var ctrl = this
    ctrl.shipId = ''
    ctrl.model = ''
    ctrl.manufacturer = ''
    ctrl.cost_in_credits = ''
    ctrl.created = ''
    ctrl.edited = ''
    ctrl.crew = ''
    ctrl.passengers = ''
    ctrl.max_atmosphering_speed = ''
    ctrl.length = ''
    ctrl.films = []
    ctrl.consumables = ''
    ctrl.cargo_capacity = ''
    ctrl.MGLT = ''

    ctrl.$onInit = function () {
      console.log('onInit', this)
    }
  }
})()
