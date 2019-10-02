(function () {
  'use strict'

  angular
    .module('app', ['ngRoute', 'ngCookies'])
    .config(config)
    .run(run)

  config.$inject = ['$routeProvider', '$locationProvider', '$httpProvider']
  function config ($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider
      .when('/ships', {
        controller: 'ShipsController',
        templateUrl: 'views/ships/ships.view.html',
        controllerAs: '$ctrl'

      })
      .when('/ships/:page', {
        controller: 'ShipsController',
        templateUrl: 'views/ships/ships.view.html',
        controllerAs: '$ctrl'

      })
      .when('/monsters', {
        controller: 'MonstersController',
        templateUrl: 'views/monsters/monsters.view.html',
        controllerAs: '$ctrl'

      })
      .when('/monsters/:page', {
        controller: 'MonstersController',
        templateUrl: 'views/monsters/monsters.view.html',
        controllerAs: '$ctrl'

      })
      .when('/', {
        controller: 'ShipsController',
        templateUrl: 'views/ships/ships.view.html',
        controllerAs: '$ctrl'
      })
      .when('/login', {
        controller: 'LoginController',
        templateUrl: 'views/login/login.view.html',
        controllerAs: 'vm'
      })
      .when('/register', {
        controller: 'RegisterController',
        templateUrl: 'views/register/register.view.html',
        controllerAs: 'vm'
      })
      .otherwise({ redirectTo: '/login' })

    // La inclusión de un interceptor es para controlar y proteget la api de peticiones concurrentes, por eso se genera un tiempo de 300 para su uso entre peticiones
    $httpProvider.interceptors.push(['$q', 'CacheService', function ($q, CacheService) {
      return {
        request: function (httpConfig) {
          let httpReqUrl = httpConfig.url.includes('https://swapi.co/api/')
          if (httpReqUrl) {
            let lastServerCallCache = CacheService.get('lastServerCall')
            // Si aún no ha hecho una llamada, permitir la petición
            if (!lastServerCallCache) {
              CacheService.add('lastServerCall', Date.parse(new Date()) / 1000)
              return httpConfig
            } else { // conseguir de la cache la instancia de la última petición al servidor "configurado por url" y calcular el tiempo de transcurso
              const timeToNextCall = 300
              let now = Date.parse(new Date()) / 1000
              if ((now - lastServerCallCache) > timeToNextCall) {
                return httpConfig
              } else {
                return $q.reject(`Call not allowed need to wait ${timeToNextCall - (now - lastServerCallCache)} seconds`)
              }
            }
          } else {
            return httpConfig
          }
        },
        responseError: function (response) {
          return $q.reject(response)
        }
      }
    }])
  }

  run.$inject = ['$rootScope', '$location', '$cookies', '$http']
  function run ($rootScope, $location, $cookies, $http) {
    // keep user logged in after page refresh
    $rootScope.globals = $cookies.getObject('globals') || {}
    if ($rootScope.globals.currentUser) {
      $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata
    }

    $rootScope.$on('$locationChangeStart', function (event, next, current) {
      // redirect to login page if not logged in and trying to access a restricted page
      var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1
      var loggedIn = $rootScope.globals.currentUser
      if (restrictedPage && !loggedIn) {
        $location.path('/login')
      }
    })
  }
})()
