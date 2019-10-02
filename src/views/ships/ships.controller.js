(function () {
  'use strict'

  angular
    .module('app')
    .controller('ShipsController', ShipsController)

  ShipsController.$inject = ['ShipsService', '$scope']
  function ShipsController (ShipsService, $scope) {
    var _this = this
    _this.fetchNext = function () {
      var url = _this.lastResponse ? _this.lastResponse.next : null
      ShipsService.GetStarships(url)
        .then(function (data) {
          _this.starships = _this.starships.concat(data.results)
          _this.lastResponse = data
          _this.lastpage = (url === null)
        })
        .catch(function () {
          _this.error = true
        })
    }
    _this.error = undefined
    _this.lastResponse = {}
    _this.starships = []

    _this.fetchNext()
  }
})()
