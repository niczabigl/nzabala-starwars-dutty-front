(function () {
  'use strict'

  angular
    .module('app')
    .controller('MonstersController', MonstersController)

  MonstersController.$inject = ['MonstersService', '$scope', '$routeParams']
  function MonstersController (MonstersService, $scope, $routeParams) {
    var _this = this
    _this.currentPage = $routeParams.page || 1
    _this.error = undefined
    _this.lastResponse = {}
    _this.monsters = []
    _this.fetchNext = fetchNext

    _this.fetchNext(_this.currentPage)

    function fetchNext (page) {
      var url = _this.lastResponse ? _this.lastResponse.next : null
      if (url !== null) {
        MonstersService.GetMonsters(url, page)
          .then(function (data) {
            _this.monsters = _this.monsters.concat(data.results)
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
