angular.module("App")

.controller("MainController", function($scope, $resource,  $routeParams, $filter, UserResource, CentrocostoResource, ServicioResource, DriverResource, TiposervicioResource, TipovehiculoResource, ComunaResource, LxNotificationService){
            
            $scope.aparecervuelos = false;
            //$scope.isAdmin = false;
            $scope.serv = {ord:{val: undefined}};
            $scope.driver = {
            driver: undefined,
            contacto: undefined,
            };
            $scope.ord = { ord: undefined }
            $scope.serv.id = $routeParams.id;
            
            
            
            //if( $scope.datosuser.accessLevel){
            //	$scope.isAdmin = true;
            
            //}
            $.post('http://www.city-ex.cl/teleton/site/getattr/', {
                   id: $routeParams.id
                   }).success(function (data){
                              //console.log(data);
                              $scope.isAdmin = data;
                              });
            
            $scope.ts = { ts: undefined }
            $scope.tv = { tv: undefined }
            $scope.us = { us: undefined }
            $scope.c1 = { c1:undefined }
            $scope.c2 = { c2:undefined }
            $scope.cc = { cc:undefined }
            $scope.drivers = DriverResource.query();
            $scope.tiposervicio = TiposervicioResource.query();
            $scope.tipovehiculo = TipovehiculoResource.query();
            $scope.comuna = ComunaResource.query();
            $scope.users = UserResource.query();
            
            $scope.cc = CentrocostoResource.query({id: $routeParams.id});
            
            $scope.acciones = [
                               {
                               acc: 'Entrada',
                               val: 1
                               },
                               {
                               acc: 'Salida',
                               val: 2
                               }
                               ];
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
                          }
                          ];
            $scope.serv.limite = 25;
            
            
            $scope.updateord = function(){
            $scope.serv.ord.val= parseInt($scope.ord.ord.val);
            
            }
            $scope.updatets = function(){
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
            $scope.updatecom1 = function(){
            $scope.serv.c1 = $scope.c1.c1.id_comuna;
            //$scope.serv.c2 = $scope.c2.c2.id_comuna;
            
            }
            $scope.updatecom2 = function(){
            $scope.serv.c2 = $scope.c2.c2.id_comuna;
            }
            $scope.updatecc = function(){
            $scope.serv.cc = $scope.cc.cc.id_centrocosto;
            }
            $scope.updateuser = function(){
            $scope.serv.id = $scope.us.us.id;
            }
            $scope.updatepprinc = function(){
            
            $.post('http://www.city-ex.cl/teleton/servicio/buscarcontactotel/', {
                   nombre: $scope.serv.pasajero_principal
                   }).success(function (data){
                              //$scope.datos = data;
                              //alert(data);
                              $scope.serv.telefono = parseInt(data);
                              });
            
            }
            
            $scope.pedir_servicio = function(){
            
            if($scope.serv.fecha == undefined){
            LxNotificationService.alert('Error', 'Especifique fecha',  'OK' , function(answer){
                                        return false;
                                        });
            
            //	alert('Especifique fecha');
            return false;
            }
            
            if(($scope.serv.horaih == undefined) || ($scope.serv.horaim == undefined) ){
            LxNotificationService.alert('Error', 'Especifique hora inicio',  'OK' , function(answer){
                                        return false;
                                        });
            //alert('Especifique hora inicio');
            return false;
            }
            
            /*if(($scope.serv.horath == undefined) || ($scope.serv.horatm == undefined) ){
             LxNotificationService.alert('Error', 'Especifique hora termino',  'OK' , function(answer){
             return false;
             });
             //alert('Especifique hora termino');
             return false;
             }*/
            
            if($scope.serv.cc == undefined){
            LxNotificationService.alert('Error', 'Especifique centro de costo',  'OK' , function(answer){
                                        return false;
                                        });
            //alert('Especifique centro de costo');
            return false;
            }
            if($scope.serv.ts == undefined){
            LxNotificationService.alert('Error', 'Especifique tipo de servicio',  'OK' , function(answer){
                                        return false;
                                        });
            //alert('Especifique tipo de servicio');
            return false;
            }
            
            if($scope.serv.tv == undefined){
            LxNotificationService.alert('Error', 'Especifique tipo vehiculo',  'OK' , function(answer){
                                        return false;
                                        });
            //alert('Especifique tipo de vehiculo');
            return false;
            }
            
            if($scope.serv.nro_pasajero == undefined){
            LxNotificationService.alert('Error', 'Especifique numero de pasajeros',  'OK' , function(answer){
                                        return false;
                                        });
            //alert('Especifique numero de pasajeros');
            return false;
            }
            
            if($scope.serv.pasajero_principal == undefined){
            LxNotificationService.alert('Error', 'Especifique pasajero principal',  'OK' , function(answer){
                                        return false;
                                        });
            //alert('Especifique pasajero principal');
            return false;
            }
            
            
            if($scope.serv.lugar_presentacion == undefined){
            LxNotificationService.alert('Error', 'Especifique lugar presentacion',  'OK' , function(answer){
                                        return false;
                                        });
            //alert('Especifique lugar presentacion');
            return false;
            }
            if($scope.serv.c1 == undefined){
            LxNotificationService.alert('Error', 'Especifique comuna presentacion',  'OK' , function(answer){
                                        return false;
                                        });
            //alert('Especifique comuna presentacion');
            return false;
            }
            
            if($scope.serv.lugar_destino == undefined){
            LxNotificationService.alert('Error', 'Especifique lugar destino',  'OK' , function(answer){
                                        return false;
                                        });
            //alert('Especifique lugar destino');
            return false;
            }
            if($scope.serv.c2 == undefined){
            LxNotificationService.alert('Error', 'Especifique comuna destino',  'OK' , function(answer){
                                        return false;
                                        });
            //alert('Especifique comuna destino');
            return false;
            }
            
            $scope.serv.fecha = $filter('date')($scope.serv.fecha, 'yyyy-MM-dd');
            $scope.$watch('serv.fecha', function() {
                          $scope.serv.fecha = $filter('date')($scope.serv.fecha, 'yyyy-MM-dd');
                          });
            
            $.post('http://www.city-ex.cl/teleton/site/insertarservicio', {
                   
                   serv: $scope.serv,
                   }).success(function (data){
                              //$scope.datos = data;
                              if (data == '1'){
                              LxNotificationService.alert('Guardado', 'Servicio guardado exitosame',  'OK' , function(answer){
                                                          //$location.path("/driver/"+$routeParams.id);
                                                          });
                              return true;
                              } 
                              else{
                              LxNotificationService.alert('Error', data,  'OK' , function(answer){
                                                          //$location.path("/driver/"+$routeParams.id);
                                                          });
                              }
                              });
            
            
            }
            $scope.buscar_servicio = function(){
            if($scope.ord.ord == undefined){
              $scope.ord = {ord: {val: 1}};

             // alert($scope.ord.ord.val);
              $scope.serv.ord = {val: ''};
            }
            $.post('http://www.city-ex.cl/teleton/site/buscarlistaservicio', {
                //if($scope.serv.ord.val == undefined)
                  //  $scope.serv.ord.val = '';
                   fecha: $scope.serv.fecha, horaih: $scope.serv.horaih, horaim: $scope.serv.horaim, horath: $scope.serv.horath, horatm: $scope.serv.horatm, lp: $scope.serv.lugar_presentacion, ld: $scope.serv.lugar_destino, tv: $scope.serv.tv, lim: $scope.serv.limite, ord: $scope.serv.ord.val, id_user: $routeParams.id,
                   }).success(function (data){
                              //$scope.datos = data;
                              $("#datos").html(data);
                              });
            
            //$scope.detalle = DetalleservicioResource.query({fecha: $scope.fecha, hi: $scope.hi, ht: $scope.ht, lp: $scope.lp, ls: $scope.ls, lv: $scope.lv, ord: $scope.ord, lim: $scope.limite });
            }
            
            $scope.ctrlport = function(){
            $.post('http://www.city-ex.cl/teleton/site/controlporteria', {
                   
                   id_user: $scope.driver.driver.id_proveedor, acc: $scope.driver.contacto.val, destino: $scope.driver.passwd,
                   });
            //alert('Datos de entrada-salida del conductor actualizados correctamente');
            }
            
            $scope.update = function(){
              //alert($scope.driver.driver.id_proveedor);
               $.post('http://www.city-ex.cl/teleton/site/gettel', {
                   id_user: $scope.driver.driver.id_proveedor,
                   }).success(function (response) {
                    // alert(response);
                    $scope.cel = response;
                    });
           
            }
            
            $scope.asignar = function(){
            $.post('http://www.city-ex.cl/teleton/site/asignarservicio', {
                   id_user: $scope.driver.driver.id_proveedor, id_serv: $scope.driver.passwd,
                   });
            LxNotificationService.alert('Asignado', 'Datos de asignacion del conductor actualizados correctamente',  'OK' , function(answer){
                                        //$location.path("/driver/"+$routeParams.id);
                                        });
            
            //alert('Datos de asignacion del conductor actualizados correctamente');
            }
            $scope.valorizar = function(){
            $.post('http://www.city-ex.cl/teleton/site/valorizarservicio', {
                   id_serv: $scope.driver.passwd,
                   });
            LxNotificationService.alert('Valorizado', 'Servicio valorizado correctamente',  'OK' , function(answer){
                                        //$location.path("/driver/"+$routeParams.id);
                                        });
            
            }	
            $scope.verificar = function(){
            $scope.serv = ServicioResource.get({id: $scope.num_serv});
            }
            
            $scope.limpiar= function(){
              //alert('limpiar');
            $scope.aparecervuelos = false;
            //$scope.isAdmin = false;
            $scope.serv = {ord:{val: undefined}};
            $scope.driver = {
            driver: undefined,
            contacto: undefined,
            };
            $scope.ord = { ord: undefined }
            $scope.serv.id = $routeParams.id;
            
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
                          }
                          ];
            $scope.serv.limite = 25;

            //$scope.drivers = DriverResource.query();
            //$scope.tiposervicio = TiposervicioResource.query();
            //$scope.tipovehiculo = TipovehiculoResource.query();
            //$scope.comuna = ComunaResource.query();
            //$scope.users = UserResource.query();
            
            //$scope.cc = CentrocostoResource.query({id: $routeParams.id});
            }

            })
            


.controller("LoginController", function($scope, $resource, $routeParams, $location, UserResource, LxNotificationService){
            
            $scope.user = { user: '', passwd: ''};
            $scope.title= "Login";
            
            
            $scope.verificar = function(){
            
            //console.log($scope.user);
            $scope.flag = false;
            $scope.driver=[];
            
            
            $scope.passwordencr =  $.post('http://www.city-ex.cl/teleton/site/encriptar', {
                                          user: $scope.user.user, pass: $scope.user.passwd
                                          }).success(function (data){
                                                     $scope.flag = data;
                                                     if($scope.flag != 0){
                                                     LxNotificationService.success('Ingresando...');
                                                     $location.path("/login/"+$scope.flag);
                                                     }
                                                     else
                                                     LxNotificationService.error('Usuario o Password incorrectos');
                                                     });
            
            }
            
            });
