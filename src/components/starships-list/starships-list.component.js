(function () {
  'use strict'
  angular.module('app')
    .component('starshipsList', {
      controller: StarshipsListController,
      templateUrl: './components/starships-list/starships-list.component.html',
      bindings: {
        starships: '<',
        onFetchNextPage: '&',
        lastpage: '='
      }
    })
  function StarshipsListController ($scope) {
    var ctrl = this
    ctrl.starship = {}
    ctrl.$onInit = function () {
      ctrl.showShipDetails = function (ship) {
        ctrl.starship = ship
        $('#starshipdetail').modal('show')
      }

      ctrl.fetchNextPage = function () {
        if (!ctrl.lastpage) {
          ctrl.onFetchNextPage()
        }
      }
    }
  }
})()
