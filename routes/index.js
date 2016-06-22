'use strict';

var config = require('../config/local'), 
    FormDb     = require('../db/db.js');
    
module.exports = function(router){

	router.get('/',function(req,res){
		res.render('index');
	});
}
