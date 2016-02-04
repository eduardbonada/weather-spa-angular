// MODULE
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

// ROUTES
weatherApp.config(function ($routeProvider) {
   
    $routeProvider
    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })
    .when('/forecast', {
        templateUrl: 'pages/forecast.html',
        controller: 'forecastController'
    })
    
});

// SERVICES
weatherApp.service('cityService', function(){

	this.city = "Barcelona"; // default

});

// CONTROLLERS
weatherApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService) {

	$scope.city = cityService.city;

	$scope.$watch('city', function(){
		cityService.city = $scope.city; // update the service when the value changes (since bound to input text field)
	});

}]);

weatherApp.controller('forecastController', ['$scope', 'cityService', function($scope, cityService) {

	$scope.city = cityService.city;

}]);