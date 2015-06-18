'use strict';

/**
 * @ngdoc function
 * @name theyolopartyApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the theyolopartyApp
 */
angular.module('theyolopartyApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
