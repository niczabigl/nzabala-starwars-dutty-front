(function () {
  'use strict'
  angular.module('app')
    .component('starshipsList', {
      controller: StarshipsListController,
      templateUrl: './ships/starships-list/starships-list.component.html',
      bindings: {
        starships: '<',
        onFetchNextPage: '&'
      }
    })
  function StarshipsListController ($scope) {
    var ctrl = this
    ctrl.selectedStarShip = false
    ctrl.starship = {}

    ctrl.showShipDetails = function showShipDetails (ship) {
      console.log('showShipDetails', ship)
      ctrl.selectedStarShip = true
      ctrl.starship = ship
    }

    ctrl.fetchNextPage = function () {
      ctrl.onFetchNextPage()
    }
  }
})()
