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
		  status: true
		},
		{
		  name: 'Route to JSON',
		  status: false
		}
	];

	$scope.addTasks = function(typeTask) {
		if(!(typeTask === undefined || typeTask === "")) {
		    $scope.tasks.unshift({  
		      name: $scope.typeTask,
		      status: false
		    });

		    // $('.tasks').prepend($scope.typeTask);
		    // items.unshift(typeTask);

		    $scope.typeTask = "";
		}
	};

	$scope.getTasks = function(){
		return $scope.showTasks ? "doneTasks.html" : "undoneTasks.html";
	}
	/*
	$scope.getID = function(){
		// var elemID = '#del-' + $(this).find("input").attr("id");
		var elemID = $(".tasksModule").attr("id");
		console.log(elemID);
		$(elemID).hide();
		var elemID = "";
		// console.log("2" + elemID);
	}
	*/

}]);

