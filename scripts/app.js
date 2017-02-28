(function(){
	//create module
	var app = angular.module("NUI", []);

	//create controller
	app.controller("GetCtrl", function($scope, $http) {
		
		//function to run on button click
		$scope.getData = function(){
			document.getElementById("angularcontent").style.display = "block";
			//request
	  		$http.get('htps://api.myjson.com/bins/znmid').
	    		then(function(response) {
	      			$scope.configs = response.data.configurations;
	    		}, function(response) {
	      			console.log(response);
	      			document.getElementById("angularcontent").innerHTML = "Unable to complete request. Please view the console.";
	    		});
	    };

	});
})();