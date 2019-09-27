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
      console.log('GetStarships', url)
      return $http.get(url, {
        headers: {
          'Authorization': 'none'
        },
        timeout: 5000
      }).then(function (res) {
        console.log('GetStarships res', res)
        let { status } = res
        console.log('GetStarships status', status)
        if (status !== 200) {
          return getMockup()
        } else {
          return res.data
        }
      }).catch(function (err) {
        console.log('catch data', err)
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
