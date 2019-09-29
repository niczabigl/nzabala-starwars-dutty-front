(function () {
  'use strict'
  angular
    .module('app')
    .directive('onError', function () {
      return {
        restrict: 'A',
        link: function (scope, element, attr) {
          element.on('error', function () {
            element.attr('src', '/app-content/no-img.jpg')
          })
        }
      }
    })
})()
