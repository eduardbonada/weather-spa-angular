// CONTROLLERS
weatherApp.controller('homeController', ['$scope', '$location', 'cityService', function($scope, $location, cityService) {

	$scope.city = cityService.city;

	$scope.$watch('city', function() {
		cityService.city = $scope.city; // update the service when the value changes (since bound to input text field)
	});

	$scope.submitCity = function(){
		$location.path('/forecast');
	};

}]);

weatherApp.controller('forecastController', ['$scope', '$routeParams', 'cityService', 'weatherService', function($scope, $routeParams, cityService, weatherService) {

	$scope.city = cityService.city;

	$scope.days = $routeParams.days || '2';

	$scope.weatherResult = weatherService.getWeather($scope.city, $scope.days);

	$scope.convertToCelsius = function(degK) {
		return Math.round(degK - 273.15);
	}
	$scope.convertToDate = function(dt) {
		return new Date(dt * 1000);
	};

}]);