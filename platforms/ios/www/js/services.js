angular.module("App")
.factory("ServicioResource", function($resource){
	return $resource("http://www.city-ex.cl/rapi2/api/serviciovina/:id", {id: "@id"});
		
	})
