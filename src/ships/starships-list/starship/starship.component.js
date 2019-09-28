(function () {
  'use strict'
  angular
    .module('app')
    .component('starship', {
      controller: StarshipController,
      templateUrl: './ships/starships-list/starship/starship.component.html',
      bindings: {
        starship: '<'
      }
    })

  function StarshipController ($scope) {
    var ctrl = this
    ctrl.shipId = ''
    ctrl.starshipimg = false
    ctrl.$onInit = function () {
      getStarshipId()
    }
    
    function getStarshipId () {
      var url = ctrl.starship.url
      ctrl.shipId = url.split('/').filter(function (item) {
        return item !== ''
      }).slice(-1)[0]
    }
  }
})()
