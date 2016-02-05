// SERVICES
weatherApp.service('cityService', function() {

	this.city = "Barcelona"; // default

});

weatherApp.service('weatherService', ['$resource', function($resource) {

	this.getWeather = function(city, days) {
		// set up the resource (ensuring the browser is not going to complain to get data from another url)
		var weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily', {
			callback: 'JSON_CALLBACK'
		}, {
			get: {
				method: 'JSONP'
			}
		});

		// get the resource data
		return weatherAPI.get({
			q: city,
			cnt: days,
			appid: '44db6a862fba0b067b1930da0d769e98'
		});
	};
}]);