var app = angular.module("app",["ngRoute"]);


app.config(function($routeProvider) {
	  $routeProvider
	  .when("/", {
	    templateUrl : "view/home.html",
	    controller : "homeCtrl"
	  })
	  .when("/users", {
	    templateUrl : "view/users.html"
	    
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
	 
	
	 $http.get("http://localhost:8000/userlist")
	    .then(function(response) {
	        $scope.users = response.data;
	        console.log($scope.users);
	    });
	 
	 $scope.AddNewUser =  function(){
		
		
		 var d = $scope.dob.getFullYear() + "-" + $scope.dob.getMonth() + "-" + $scope.dob.getDate();
		 $scope.newuser.bdate = d;
		 
		 $http.post("http://localhost:8000/userlist/", $scope.newuser).
	        then(function (data, status, headers, config) { alert("success") },
	             function (data, status, headers, config) { alert("error") });
		 
	 }
	 $scope.DeleteUser =  function(){
		    alert("hello");
	  }
	 $scope.EditUser =  function(){
		    alert("hello");
	  }
	
	$scope.searchUserShow = true;
	$scope.addUserShow = false;
	
    $scope.btnSearch = function(){
    	$scope.searchUserShow = true;
    	$scope.addUserShow = false;
    	 $http.get("http://localhost:8000/userlist")
 	    .then(function(response) {
 	        $scope.users = response.data;
 	        console.log($scope.users);
 	    });
    	
    	
    }
    $scope.btnAdd = function(){
    	$scope.searchUserShow = false;
    	$scope.addUserShow = true;
    }
});