var app1 = angular.module('app1', []);
app1.controller('ctrl1', ['$scope', function($scope) {
	$scope.second = 2;

	$scope.tasks = [
		{ 
		  name: 'Learn AngularJS',
		  status: true
		},
		{
		  name: 'Create a simple to-do app',
		  status: true 
		},
		{
		  name: 'Push project to Github',
		  status: false
		}
	];

	$scope.addTasks = function(typeTask) {
		if(!(typeTask === undefined || typeTask === "")) {
		    $scope.tasks.push({  
		      name: $scope.typeTask,
		      status: false
		    });
		}
	};

	$scope.getTasks = function(){
		return $scope.showTasks ? "doneTasks.html" : "undoneTasks.html";
	}

}]);