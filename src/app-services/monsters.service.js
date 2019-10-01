(function () {
  'use strict'

  angular
    .module('app')
    .factory('MonstersService', MonstersService)

  MonstersService.$inject = ['$http']
  function MonstersService ($http) {
    var service = { GetMonsters: GetMonsters }
    return service

    function GetMonsters (url, page) {
      if (!url) {
        url = 'https://swapi.co/api/species/'
      }
      if (page) {
        url = url + '?page=' + page
      }
      return $http.get(url, {
        headers: {
          'Authorization': 'none'
        }
      }).then(function (res) {
        return res.data
      })
    }
  }
})()
