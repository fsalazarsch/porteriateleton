
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



.config(['$routeProvider', '$compileProvider', function($routeProvider) {

   
		$routeProvider
			.when('/', {
				controller: 'MainController',
				templateUrl: 'templates/home.html'
				})


}]);
