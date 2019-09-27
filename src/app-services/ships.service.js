(function () {
  'use strict'

  angular
    .module('app')
    .factory('ShipsService', ShipsService)

  ShipsService.$inject = ['$http']
  function ShipsService ($http) {
    var service = { GetStarships: GetStarships }
    return service

    function GetStarships (url) {
      if (!url) {
        url = 'https://swapi.co/api/starships/'
      }
      return $http.get(url, {
        headers: {
          'Authorization': 'none'
        },
        timeout: 5000
      }).then(function (res) {
        let { status } = res
        if (status !== 200) {
          return getMockup()
        } else {
          return res.data
        }
      }).catch(function (err) {
        console.error('catch data', err)
        return getMockup()
      })
    }

    function getMockup () {
      $http.get(`${__dirname}/mockups/starships.example.json`).then(function (data) {
        console.log('mockup data', data.data)
        return data.data
      })
    }
  }
})()
