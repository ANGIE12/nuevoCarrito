var app=angular.module("MainApp", []);




app.controller("mainController",operaciones);

function operaciones ($scope,$http) {
	$scope.newproductos = [];
	$scope.productos = [
		];


//Cuando se cargue la pagina , obtiene los datos con el metodo http.get y los pasa a un vector productos
		$http.get('/productos').success(function(data) {
	   		$scope.productos = data;
	   	}).error(function(data) {
	   		console.log('Error: ' + data);
	   	});






	     

			$scope.ordenarPor=function(orden){
				$scope.ordenSeleccionado=orden;
			}

			$scope.selectProducto = function(producto) {


 if(!this.isEmpty(producto,$scope.newproductos)){
	// $scope.newproducto.cantidad = 1;
	$scope.newproductos.push(producto);
}
}

$scope.isEmpty=function(producto,newproductos){
		 var i;
		 var len= $scope.newproductos.length;
			for(i=0; i < len;i++){
					 if(newproductos[i].Nombre===producto.Nombre){
						 return true ;
					 }
			 }
			 return false;
 }

 $scope.borrar= function(producto){
  	var i;
      var len= $scope.newproductos.length;
       for(i=0; i < len;i++){
            if($scope.newproductos[i].Nombre===producto.Nombre){
                $scope.newproductos.splice(i,1);
              return  ;
            }
        }

  }



};
