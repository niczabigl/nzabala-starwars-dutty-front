(function () {
  'use strict'

  angular
    .module('app')
    .factory('CacheService', CacheService)

  CacheService.$inject = ['$rootScope', '$cacheFactory']
  function CacheService ($rootScope, $cacheFactory) {
    // la inyeccion $cacheFactory es un HashMap que tiene la libreria de angular, no deja de ser un HashMap con Id, y dentro otro HashMap que almacena las Key/value pairs
    var cache = {}

    cache.add = add
    cache.remove = remove
    cache.get = get
    return cache

    function add (key, value) {
      cache[key] = value
    }

    function remove (key) {
      delete cache[key]
    }

    function get (key) {
      return cache[key]
    }
  }
})()
