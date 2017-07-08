angular.module("App")
.factory("ServicioResource", function($resource){
	return $resource("http://www.city-ex.cl/rapi2/api/servicioteleton/:id", {id: "@id"});
		
	})
.factory("DriverResource", function($resource){
	return $resource("http://www.city-ex.cl/rapi2/api/driverteleton");
		
	})
.factory("UserResource", function($resource){
	return $resource('http://www.city-ex.cl/rapi2/api/userteleton', {}, {
        query: {method: 'GET',  url: 'http://www.city-ex.cl/rapi2/api/userteleton/' },
        get: { method: 'GET',  url: 'http://www.city-ex.cl/rapi2/api/userteleton/:id', id: "@id"},
	})
	})

.factory("TiposervicioResource", function($resource){
	return $resource("http://www.city-ex.cl/rapi2/api/tiposervicioteleton");
		
	})
.factory("TipovehiculoResource", function($resource){
	return $resource("http://www.city-ex.cl/rapi2/api/tipovehiculoteleton");
		
	})
.factory("ComunaResource", function($resource){
	return $resource("http://www.city-ex.cl/rapi2/api/comunateleton");
		
	})
.factory("CentrocostoResource", function($resource){
//	return $resource("http://www.city-ex.cl/rapi2/api/centrocostoteleton/:id", {id: "@id"});
	return $resource('http://www.city-ex.cl/rapi2/api/centrocostoteleton/:id', {id: "@id"},
	 {
        query: {method: 'GET', isArray:true, url: 'http://www.city-ex.cl/rapi2/api/centrocostoteleton/:id', id: "@id" },
       // get: { method: 'GET',  url: 'http://www.city-ex.cl/rapi2/api/centrocostoteleton/:id', id: "@id"},
	})
	})