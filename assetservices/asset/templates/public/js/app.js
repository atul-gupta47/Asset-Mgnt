var app = angular.module("app",["ngRoute"]);


app.config(function($routeProvider) {
	  $routeProvider
	  .when("/", {
	    templateUrl : "view/home.html",
	    controller : "homeCtrl"
	  })
	  .when("/users", {
	    templateUrl : "view/users.html",
	    controller : "usersCtrl"
	  })
	  .when("/stocks", {
	    templateUrl : "view/stocks.html",
	    controller : "stocksCtrl"
	  })
	  .when("/assignment", {
	    templateUrl : "view/assignment.html",
	    	controller : "assignmentCtrl"
	  })
	  .when("/searchUser", {
		    templateUrl : "view/searchUser.html"
		  })
	  
	  .when("/addUser", {
		    templateUrl : "view/addUser.html"
		  });
	});

app.controller("homeCtrl", function ($scope) {
    $scope.msg = "home";
});

app.controller("assignmentCtrl", function ($scope) {
    $scope.msg = "assignment";
});
app.controller("stocksCtrl", function ($scope) {
    $scope.msg = "stock";
});
app.controller("usersCtrl", function ($scope, $http) {
	$http({
		   method: 'GET',
		   url: 'http://localhost:8000/userlist',
		   headers: {"content-type": "application/json",
			    "accept": "application/json",
			    "authorization": "Basic YWRtaW46YWRtaW4="}
		 });
	$scope.searchUserShow = true;
	$scope.addUserShow = false;
	$scope.msg = "users";
    $scope.btnSearch = function(){
    	$scope.searchUserShow = true;
    	$scope.addUserShow = false;
    	
    	
    }
    $scope.btnAdd = function(){
    	$scope.searchUserShow = false;
    	$scope.addUserShow = true;
    }
});