(function () {
  'use strict'

  angular
    .module('app')
    .controller('ShipsController', ShipsController)

  ShipsController.$inject = ['ShipsService', '$scope', '$routeParams']
  function ShipsController (ShipsService, $scope, $routeParams) {
    var _this = this
    _this.currentPage = $routeParams.page || 1
    _this.error = undefined
    _this.lastResponse = {}
    _this.starships = []
    _this.fetchNext = fetchNext

    _this.fetchNext(_this.currentPage)

    function fetchNext (page) {
      var url = _this.lastResponse ? _this.lastResponse.next : null
      if (url !== null) {
        ShipsService.GetStarships(url, page)
          .then(function (data) {
            _this.starships = _this.starships.concat(data.results)
            _this.lastResponse = data
            _this.lastpage = (data.next === null)
            _this.error = false
          }, function (error) {
            _this.error = true
            _this.errorMsg = error
          })
          .catch(function (error) {
            _this.error = true
            _this.errorMsg = error
          })
      } else {
        _this.lastpage = true
      }
    }
  }
})()
