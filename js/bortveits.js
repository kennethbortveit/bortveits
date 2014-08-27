var app = angular.module("bortveits", []);

app.directive("topBar", function(){
	return {
		restrict: 'E',
		templateUrl: "js/templates/topBar.php"
	};

});




