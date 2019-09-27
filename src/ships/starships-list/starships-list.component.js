(function () {
  'use strict'
  angular.module('app')
    .component('starshipsList', {
      controller: StarshipsListController,
      templateUrl: './ships/starships-list/starships-list.component.html',
      bindings: {
        starships: '<',
        onFetchNextPage: '&',
        lastpage: '='
      }
    })
  function StarshipsListController ($scope) {
    var ctrl = this
    ctrl.starship = {}

    ctrl.showShipDetails = function showShipDetails (ship) {
      ctrl.starship = ship
      $('#starshipdetail').modal('show')
    }

    ctrl.fetchNextPage = function () {
      if (!ctrl.lastpage) {
        ctrl.onFetchNextPage()
      }
    }
  }
})()
