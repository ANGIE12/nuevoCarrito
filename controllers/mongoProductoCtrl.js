var mongoose = require('mongoose');
var Producto = require('../models/Producto');

exports.mostrarProductos = function(req,res){
	Producto.find(function(err,productos){
          if(err){
          	return res.send(500,err.message);
          }
          res.status(200).jsonp(productos);
	});
}



