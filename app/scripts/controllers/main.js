'use strict';

/**angular.module('angularSampleAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });*/

var app = angular
  .module('angularSampleAppApp', ['ngGrid', 'ui.router']);

/**app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/details', {
        templateUrl: 'views/details.html',
        controller: 'DetailCtrl'
      }).
      otherwise({
        redirectTo: 'views/main.html'
      });
  }]);*/

app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/mainState");
  //
  // Now set up the states
  $stateProvider
    .state('mainState', {
      url: "/",
      templateUrl: "../../views/main.html"
    })
    .state('detailsState', {
      url: "/details",
      templateUrl: "../../views/details.html"
    })
    });

app.controller('MainCtrl', function($scope) {
    $scope.myData = [{name: 'Moroni', age: 50},
                     {name: 'Tiancum', age: 43},
                     {name: 'Jacob', age: 27},
                     {name: 'Nephi', age: 29},
                     {name: 'Enos', age: 34}];
    $scope.gridOptions = { data: 'myData' };
   });

/**app.controller('DetailCtrl', function($scope) {
     
    $scope.message = 'This is Add new order screen';
     
});*/