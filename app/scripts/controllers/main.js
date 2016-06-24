'use strict';

/**
 * @ngdoc function
 * @name transaldisAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the transaldisAdminApp
 */
angular.module('transaldisAdminApp')
  .controller('MainCtrl', function($scope, $cookies, $location) {
    if ($cookies.get('user') == null) {
      console.log("non connecté");
      $scope.opensidenav = false;
    } else {
      console.log("connecté " + $cookies.get('user'));
        $scope.opensidenav = true;
      $location.url('/home');
    }

    $scope.logIn = function(user) {
      console.log(user.pseudo);
      //todo vérifier en bdd le user
      $scope.opensidenav = true;
      $cookies.put('user', user.pseudo);
      $location.url('/home');
    }
  });
