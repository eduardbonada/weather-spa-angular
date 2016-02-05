// CONTROLLERS
weatherApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService) {

	$scope.city = cityService.city;

	$scope.$watch('city', function() {
		cityService.city = $scope.city; // update the service when the value changes (since bound to input text field)
	});

}]);

weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', function($scope, $resource, $routeParams, cityService) {

	$scope.city = cityService.city;

	$scope.days = $routeParams.days || '2';

	// set up the resource (ensuring the browser is not going to complain to get data from another url)
	$scope.weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily', {
		callback: 'JSON_CALLBACK'
	}, {
		get: {
			method: 'JSONP'
		}
	});

	// get the resource data
	$scope.weatherResult = $scope.weatherAPI.get({
		q: $scope.city,
		cnt: $scope.days,
		appid: '44db6a862fba0b067b1930da0d769e98'
	});

	$scope.convertToCelsius = function(degK) {
		return Math.round(degK - 273.15);
	}
	$scope.convertToDate = function(dt) {
		return new Date(dt * 1000);
	};

}]);