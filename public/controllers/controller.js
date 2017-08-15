//this code doesn't work for latest Angular version
/*function AppCtrl() {	//function name same as ng-controller in index.html
	console.log("Hello world from controller");
}*/

//this code works for latest Angular version
var myApp = angular.module('myApp',[])
myApp.controller('AppCtrl', ['$scope', '$http',
	function($scope,$http) {	//scope is used for binding model and view
		/*console.log("Hello world from controller");	*/

	$http.get('/studentlist').success(function(response) {
		console.log("Received data");
		$scope.studentlist = response;
	});

	
	}
	]);