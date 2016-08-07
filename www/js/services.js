angular.module("App")
.factory("ServicioResource", function($resource){
	return $resource("http://www.city-ex.cl/rapi2/api/servicioteleton/:id", {id: "@id"});
		
	})
.factory("DriverResource", function($resource){
	return $resource("http://www.city-ex.cl/rapi2/api/driverteleton");
		
	})
