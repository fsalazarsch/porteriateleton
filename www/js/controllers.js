angular.module("App")

.controller("MainController", function($scope, $resource, $routeParams, $location, ServicioResource, LxNotificationService){
	
	
	//$scope.drivers = DriverResource.query();
	$scope.title= "Login";
	//$scope.servs = '';
	
	$scope.verificar = function(){
		//alert($scope.num_serv);
		$scope.serv = ServicioResource.get({id: $scope.num_serv});
	}


	});
