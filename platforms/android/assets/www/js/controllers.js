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
	
	$scope.ctrlport = function(){
	$.post('http://www.city-ex.cl/teleton/site/controlporteria', {
	id_user: $scope.driver.driver.id_proveedor, acc: $scope.driver.contacto.val, destino: $scope.driver.passwd,
	});
	
	alert('Datos de entrada-salida del conductor actualizados correctamente');
	
	}



	$scope.asignar = function(){
	$.post('http://www.city-ex.cl/teleton/site/asignarservicio', {
	id_user: $scope.driver.driver.id_proveedor, id_serv: $scope.driver.passwd,
	});
	alert('Datos de asignacion del conductor actualizados correctamente');
	}

	$scope.valorizar = function(){
	$.post('http://www.city-ex.cl/teleton/site/valorizarservicio', {
	id_serv: $scope.driver.passwd,
	});
	alert('Servicio valorizado correctamente');
	}
				
	
	$scope.verificar = function(){
		$scope.serv = ServicioResource.get({id: $scope.num_serv});
	}


	})
.controller("LoginController", function($scope, $resource, $routeParams, $location, UserResource, LxNotificationService){
	
	$scope.drivers = UserResource.query();
	$scope.title= "Login";
	

	$scope.verificar = function(){
		$scope.flag = false;
		$scope.drivers=[];

		$scope.passwordencr =  $.post('http://www.city-ex.cl/teleton/site/encriptar', {
			id: $scope.driver.passwd 
		});


		y = UserResource.query(function (response){
			angular.forEach(response, function (item){
					$scope.drivers.push(item);
			});
		});

		$scope.update = function(){
			$scope.driver.driver= parseInt($scope.drivers[0].id);
		}
		

		x = UserResource.query(function (response) 
		{
		    angular.forEach(response, function (item) 
		    {
				

				if(item.sandbox == $scope.passwordencr.responseText){
						
					if(item.id_driver == $scope.driver.id){
					if($scope.flag == false)
						$scope.flag = true;
						}
					if(item.id_driver != $scope.driver.id){
						if($scope.flag == true)
						$scope.flag = true;
						}
				}
			});
					if($scope.flag == true){
						$location.path("/login/1");
					}
					else
					LxNotificationService.error('Usuario o Password incorrectos');
		});

	}


	});
