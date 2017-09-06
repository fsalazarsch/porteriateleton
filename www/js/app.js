
var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, true);
    },

    onDeviceReady: function() {
        angular.element(document).ready(function() {
            angular.bootstrap(document);
        });
    },
};

angular.module("App",["lumx","ngRoute","ngResource"])



.config(['$routeProvider', '$compileProvider',  function($routeProvider) {

   
		$routeProvider
			.when('/', {
				controller: 'LoginController',
				templateUrl: 'templates/login.html'
				})
			.when('/login/:id', {
				controller: 'MainController',
				templateUrl: 'templates/home.html'
				})
			//.when('/login/2', {
			//	controller: 'MainController',
			//	templateUrl: 'templates/homeguest.html'
			//	})

}]);
