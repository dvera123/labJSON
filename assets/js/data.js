$(document).ready(function(){
  	var url = "assets/data/data.json";
  	$.getJSON( url, function( data ) {
  		$.each( data, function( key, val ) {
    		console.log(val.text);
  		});
	});
})