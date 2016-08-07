angular.module("App")

.controller("MainController", function($scope, $resource, $routeParams, $location, ServicioResource, DriverResource, LxNotificationService){
	
	
	$scope.driver = {
		driver: undefined,
		contacto: undefined,
		};
    $scope.drivers = DriverResource.query();
	
	 $scope.acciones = [
        {
            acc: 'Entrada',
            val: 1
        },
        {
            acc: 'Salida',
            val: 2
        }];

	$scope.title= "Login";
	//$scope.servs = '';
	
	
	$scope.verificar = function(){
		$scope.serv = ServicioResource.get({id: $scope.num_serv});
	}


	});
