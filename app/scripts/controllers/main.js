'use strict';

/**
 * @ngdoc function
 * @name theyolopartyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the theyolopartyApp
 */
angular.module('theyolopartyApp')
  .controller('MainCtrl', function ($scope) {
    $scope.videos = videos;

    $scope.track = function(id){
    	console.log(id);
    };



  });
