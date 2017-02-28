(function(){
	//Boolean to limit one display
	var displayed = false;
	
	//Run on successful request
	function dataHandle(data){
		displayed = true;
		var sample = data.configurations;
		for (var i = 0; i < sample.length; i++) {
			var block = "<ul><li><b>Name: </b>" + sample[i].name + "</li>" +
						"<li><b>Hostname: </b>" + sample[i].hostname + "</li>" +
						"<li><b>Port: </b>" + sample[i].port + "</li>" +
						"<li><b>Username: </b>" + sample[i].username + "</li>" +
						"</ul>";
			$("#jquerycontent").append(block);
			$("#jquerycontent").css('display', 'block');
		}
	}

	//Run on request failure
	function errorHandle(error){
		displayed = true;
		console.log(error);
		$("#jquerycontent").append("<p style='color:red'>Unable to complete request. Please view the console.</p>");
		$("#jquerycontent").css('display', 'block');
	}

	//make request to sample data endpoint
	$("#jquerybtn").click(function(){
		if (displayed == false) {
	    	$.ajax({
	        	url: 'https://api.myjson.com/bins/znmid',
	        	type: 'GET',
	        	dataType: "json",
	        	success: dataHandle,
	        	error: errorHandle
			})
    	}
	});	
})();