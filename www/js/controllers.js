angular.module("App")

.controller("MainController", function($scope, $resource,  $routeParams, $filter, UserResource, CentrocostoResource, ServicioResource, DriverResource, TiposervicioResource, TipovehiculoResource, ComunaResource, LxNotificationService){
	
	$scope.aparecervuelos = false;
	$scope.serv = {};
	$scope.driver = {
		driver: undefined,
		contacto: undefined,
		};
	$scope.ord = {
		ord: undefined,
	}
	$scope.serv.id = $routeParams.id;
	
	
	$scope.ts = {
		ts: undefined,
	}

	$scope.tv = {
		tv: undefined,
	}

	$scope.c1 = { c1:undefined }
	$scope.c2 = { c2:undefined }
	$scope.cc = { cc:undefined }
    $scope.drivers = DriverResource.query();
	$scope.tiposervicio = TiposervicioResource.query();
	$scope.tipovehiculo = TipovehiculoResource.query();
	$scope.comuna = ComunaResource.query();
	$scope.cc = CentrocostoResource.query({id: $routeParams.id});

	//$scope.serv.selectCallback = selectCallback;

	 $scope.acciones = [
        {
            acc: 'Entrada',
            val: 1
        },
        {
            acc: 'Salida',
            val: 2
        }];

	 $scope.ord = [
        {
            ord: 'Fecha - Hora',
            val: 1
        },
        {
            ord: 'ID',
            val: 2
        },
        {
            ord: 'Tipo vehiculo',
            val: 3
        },
        {
            ord: 'Lugar presentacion',
            val: 4
        },
        {
            ord: 'Lugar destino',
            val: 5
        }];
     $scope.serv.limite = 25;
	//$scope.servs = '';
	$scope.update2 = function(){
		$scope.serv.ts = $scope.ts.ts.id_tiposervicio;
		//alert($scope.ts.ts.nombre);
		var servi = $scope.ts.ts.nombre;
		servi = servi.split(' - ');
		if ((servi[0] == "AEROPUERTO") || (servi[1] == "AEROPUERTO"))
			 $scope.aparecervuelos = true;

		if (servi[0] == "TEATRO"){
			$scope.serv.lugar_presentacion = "Teatro Teleton - Rosas";
			$scope.c1.c1 = "0";
			$scope.serv.c1 = 7;
		}
		else if (servi[0] == "TEATRO CAUPOLICAN"){
			$scope.serv.lugar_presentacion = "Teatro Caupolican";
			$scope.c1.c1 = "0";
			$scope.serv.c1 = 7;
		}
		else if (servi[0] == "AEROPUERTO"){
			$scope.serv.lugar_presentacion = "Aeropuerto Internacional Arturo Merino Benitez";
			$scope.c1.c1 = "0";
			$scope.serv.c1 = 24;

		}
		else if (servi[0] == "ESTADIO"){
			$scope.serv.lugar_presentacion = "Estadio Nacional Julio Martinez Pradanos - Grecia";
			$scope.c1.c1 = "0";
			$scope.serv.c1 = 22;

		}
		else if (servi[0] == "PLAZA DE ARMAS"){
			$scope.serv.lugar_presentacion = "Plaza de Armas";
			$scope.c1.c1 = "0";
			$scope.serv.c1 = 7;
		}
		else{
			$scope.serv.lugar_presentacion = undefined;
			//$scope.serv.c1 = 0;
			$scope.c1.c1 = "";
			}

		if (servi[1] == "TEATRO"){
			$scope.serv.lugar_destino = "Teatro Teleton - Rosas";
			$scope.c2.c2 = "0";
			$scope.serv.c2 = 7;
		}
		else if (servi[1] == "TEATRO CAUPOLICAN"){
			$scope.serv.lugar_destino = "Teatro Caupolican";
			$scope.c2.c2 = "0";
			$scope.serv.c2 = 7;
		}
		else if (servi[1] == "AEROPUERTO"){
			$scope.serv.lugar_destino = "Aeropuerto Internacional Arturo Merino Benitez";
			$scope.c2.c2 = "0";
			$scope.serv.c2 = 24;
		}
		else if (servi[1] == "ESTADIO"){
			$scope.serv.lugar_destino = "Estadio Nacional Julio Martinez Pradanos - Grecia";
			$scope.c2.c2 = "0";
			$scope.serv.c2 = 22;
		}
		else if (servi[1] == "PLAZA DE ARMAS"){
			$scope.serv.lugar_pdestino = "Plaza de Armas";
			$scope.c2.c2 = "0";
			$scope.serv.c2 = 7;
		}
		else{
			$scope.serv.lugar_destino = undefined;
			//$scope.serv.c2 = 0;
			$scope.c2.c2 = "";
			}

		}

	$scope.updatetv = function(){
		$scope.serv.tv = $scope.tv.tv.id_tipovehiculo;
		var tipo = $scope.tv.tv.nombre;
		if( tipo == 'CAMION'){
			$scope.serv.nro_pasajero = 0;
			$scope.serv.pasajero_principal = 'CARGA';
			}
		}

	$scope.update5 = function(){
		$scope.serv.c1 = $scope.c1.c1.id_comuna;
		//$scope.serv.c2 = $scope.c2.c2.id_comuna;

		}
	$scope.update6 = function(){
		$scope.serv.c2 = $scope.c2.c2.id_comuna;
		}
	$scope.updatecc = function(){
		$scope.serv.cc = $scope.cc.cc.id_centrocosto;
	}

	$scope.pedir_servicio = function(){
		
		if($scope.serv.fecha == undefined){
			alert('Especifique fecha');
			return false;
		}

		if(($scope.serv.horaih == undefined) || ($scope.serv.horaim == undefined) ){
			alert('Especifique hora inicio');
			return false;
		}

		if(($scope.serv.horath == undefined) || ($scope.serv.horatm == undefined) ){
			alert('Especifique hora termino');
			return false;
		}

		if($scope.serv.cc == undefined){
			alert('Especifique centro de costo');
			return false;
		}
		if($scope.serv.ts == undefined){
			alert('Especifique tipo de servicio');
			return false;
		}

		if($scope.serv.tv == undefined){
			alert('Especifique tipo de vehiculo');
			return false;
		}

		if($scope.serv.nro_pasajero == undefined){
			alert('Especifique numero de pasajeros');
			return false;
		}

		if($scope.serv.pasajero_principal == undefined){
			alert('Especifique pasajero principal');
			return false;
		}


		if($scope.serv.lugar_presentacion == undefined){
			alert('Especifique lugar presentacion');
			return false;
		}
		if($scope.serv.c1 == undefined){
			alert('Especifique comuna presentacion');
			return false;
		}

		if($scope.serv.lugar_destino == undefined){
			alert('Especifique lugar destino');
			return false;
		}
		if($scope.serv.c2 == undefined){
			alert('Especifique comuna destino');
			return false;
		}

		$scope.serv.fecha = $filter('date')($scope.serv.fecha, 'yyyy-MM-dd');
		$scope.$watch('serv.fecha', function() {
			$scope.serv.fecha = $filter('date')($scope.serv.fecha, 'yyyy-MM-dd');
			});

		$.post('http://www.city-ex.cl/teleton/site/insertarservicio', {

		serv: $scope.serv,
		});
		
		LxNotificationService.alert('Guardado', 'Servicio guardado exitosame',  'OK' , function(answer){
		//$location.path("/driver/"+$routeParams.id);
		});

		return true;
	}

	$scope.buscar_servicio = function(){
		
	}


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

////AQUI EMPIEZA LA TABLA
 DemoDataTableController.$inject = ['$filter', '$scope'];

		var vm = { dataTableThead: []};

        vm.dataTableThead = [
        {
            name: 'dessert',
            label: 'Dessert',
            sortable: true
        },
        {
            name: 'calories',
            label: 'Calories',
            sortable: true
        },
        {
            name: 'fat',
            label: 'Fat (g)',
            sortable: true,
            sort: 'asc'
        },
        {
            name: 'comments',
            label: 'Comments',
            icon: 'comment-text',
            sortable: false
        }];
        vm.dataTableTbody = [
        {
            id: 1,
            image: '/images/placeholder/1-square.jpg',
            dessert: 'Frozen yogurt',
            calories: 159,
            fat: 6.0,
            comments: 'Lorem ipsum'
        },
        {
            id: 2,
            image: '/images/placeholder/2-square.jpg',
            dessert: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            comments: 'Lorem ipsum',
            lxDataTableDisabled: true
        },
        {
            id: 3,
            image: '/images/placeholder/3-square.jpg',
            dessert: 'Eclair',
            calories: 262,
            fat: 16.0,
            comments: 'Lorem ipsum'
        }];
    function DemoDataTableController($filter, $scope)
    {
        var vm = this;

        vm.dataTableThead = [
        {
            name: 'dessert',
            label: 'Dessert',
            sortable: true
        },
        {
            name: 'calories',
            label: 'Calories',
            sortable: true
        },
        {
            name: 'fat',
            label: 'Fat (g)',
            sortable: true,
            sort: 'asc'
        },
        {
            name: 'comments',
            label: 'Comments',
            icon: 'comment-text',
            sortable: false
        }];
        vm.advancedDataTableThead = angular.copy(vm.dataTableThead);
        vm.advancedDataTableThead.unshift(
        {
            name: 'image',
            format: function(row)
            {
                return '<img src="' + row.image + '" width="40" height="40" class="img-round">';
            }
        });
        vm.dataTableTbody = [
        {
            id: 1,
            image: '/images/placeholder/1-square.jpg',
            dessert: 'Frozen yogurt',
            calories: 159,
            fat: 6.0,
            comments: 'Lorem ipsum'
        },
        {
            id: 2,
            image: '/images/placeholder/2-square.jpg',
            dessert: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            comments: 'Lorem ipsum',
            lxDataTableDisabled: true
        },
        {
            id: 3,
            image: '/images/placeholder/3-square.jpg',
            dessert: 'Eclair',
            calories: 262,
            fat: 16.0,
            comments: 'Lorem ipsum'
        }];

        $scope.$on('lx-data-table__selected', updateActions);
        $scope.$on('lx-data-table__unselected', updateActions);
        $scope.$on('lx-data-table__sorted', updateSort);

        ////////////

        function updateActions(_event, _dataTableId, _selectedRows)
        {
            if (_dataTableId === 'lolo') {
                vm.selectedRows = _selectedRows;
            }
        }

        function updateSort(_event, _dataTableId, _column)
        {
            vm.dataTableTbody = $filter('orderBy')(vm.dataTableTbody, _column.name, _column.sort === 'desc' ? true : false);
        }
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
