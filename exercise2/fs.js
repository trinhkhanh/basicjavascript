/**
 * Created by khanh on 21/11/2015.
 */
	'use strict';
var fs = require('fs');

var name = 'index.html';


fs.readdir('/home/khanh/demojavascript/exercise2/' , function (err,listFiles){

	console.log('Cac thu muc exercise2 gom: ' + listFiles);
	var check = false;
	for(var i = 0; i <  listFiles.length; i++){

		if(listFiles[i] == name ){
			check = true;
		}
	}

	if(check) {
		console.log('Co file ' + name);
	} else {
		console.log('Khong co file' + name);
	}

});
