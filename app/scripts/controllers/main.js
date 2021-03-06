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

    app.config(function($stateProvider, $urlRouterProvider){
      
      // For any unmatched url, send to /route1
      $urlRouterProvider.otherwise("/route1")
      
      $stateProvider
        .state('route1', {
            url: "/route1",
            templateUrl: "../../views/main.html"
        })
          .state('route1.list', {
              url: "/list",
              templateUrl: "../../views/details.html",
              controller: 'MainCtrl'/**function($scope){
                $scope.items = ["A", "List", "Of", "Items"];
              }**/
          })
        .state('route2', {
            url: "/route2",
            templateUrl: "../../views/route2.html"
        })
    });
/**
app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('detailsState', {
      url: "/details",
      templateUrl: "../../views/details.html"
    })
    });
*/
app.controller('MainCtrl', function($scope, $http) {
    /**$scope.myData = [{name: 'Moroni', age: 50},
                     {name: 'Tiancum', age: 43},
                     {name: 'Jacob', age: 27},
                     {name: 'Nephi', age: 29},
                     {name: 'Enos', age: 34}];**/
    $scope.selectedData = [];

    $http.get('http://localhost:3000/user').success(function(userData) {
        $scope.myData = userData;
    });
    $scope.gridOptions = { 
        data: 'myData',
        multiSelect: false,
        selectedItems : $scope.selectedData,
          afterSelectionChange: function(rowItem, event){
              $http.get('http://localhost:3000/phone/' + $scope.selectedData[0].id).success(function(selectedPhoneData) {
              $scope.items = selectedPhoneData;
          });
        }
    };

/**app.controller('DetailCtrl', function($scope) {
     
    $scope.message = 'This is Add new order screen';
     
});*/
});