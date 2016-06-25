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
	 $scope.DeleteUser =  function(user){
		    console.log(user);
		    $http.delete("http://localhost:8000/userdetail/" + user.id + "/");
		    
		    
		    $http.get("http://localhost:8000/userlist")
	 	    .then(function(response) {
	 	        $scope.users = response.data;
	 	        console.log($scope.users);
	 	    });
	    	
	  }
	 $scope.EditUser =  function(user){
		 	
		  
		    $scope.updateUserShow = true;
		    $scope.updateuser = angular.copy(user);
		 	 console.log($scope.updateuser);
	  }
	 
	 $scope.UpdateUser = function(){
		 $http.put("http://localhost:8000/userdetail/" + $scope.updateuser.id + "/", $scope.updateuser);
		 $scope.updateUserShow = false;
		 $http.get("http://localhost:8000/userlist")
	 	    .then(function(response) {
	 	        $scope.users = response.data;
	 	        console.log($scope.users);
	 	    });
		 
	 }
	
	$scope.searchUserShow = true;
	$scope.addUserShow = false;
	$scope.updateUserShow = false;
	
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








app.controller("stocksCtrl", function ($scope, $http) {
	 
	
	 $http.get("http://localhost:8000/stocklist")
	    .then(function(response) {
	        $scope.stocks = response.data;
	        console.log($scope.stocks);
	    });
	 
	 $scope.AddNewStock =  function(){
		
		
		 var d = $scope.dop.getFullYear() + "-" + $scope.dop.getMonth() + "-" + $scope.dop.getDate();
		 $scope.newstock.dop = d;
		
		 var e = $scope.exp_date.getFullYear() + "-" + $scope.exp_date.getMonth() + "-" + $scope.exp_date.getDate();
		 $scope.newstock.exp_date = e;
		 
		 $http.post("http://localhost:8000/stocklist/", $scope.newstock).
	        then(function (data, status, headers, config) { alert("success") },
	             function (data, status, headers, config) { alert("error") });
		 
	 }
	 $scope.DeleteStock =  function(stock){
		    console.log(stock);
		    $http.delete("http://localhost:8000/stockdetail/" + stock.id + "/");
		    
		    
		    $http.get("http://localhost:8000/stocklist")
	 	    .then(function(response) {
	 	        $scope.stocks = response.data;
	 	        console.log($scope.stocks);
	 	    });
	    	
	  }
	 $scope.EditStock =  function(stock){
		 	
		  
		    $scope.updateStockShow = true;
		    $scope.updatestock = angular.copy(stock);
		 	 console.log($scope.updatestock);
	  }
	 
	 $scope.UpdateStock = function(){
		 $http.put("http://localhost:8000/stockdetail/" + $scope.updatestock.id + "/", $scope.updatestock);
		 $scope.updateStockShow = false;
		 $http.get("http://localhost:8000/stocklist")
	 	    .then(function(response) {
	 	        $scope.stocks = response.data;
	 	        console.log($scope.stocks);
	 	    });
		 
	 }
	
	$scope.searchStockShow = true;
	$scope.addStockShow = false;
	$scope.updateStockShow = false;
	
   $scope.btnSearch = function(){
   	$scope.searchStockShow = true;
   	$scope.addStockShow = false;
   	 $http.get("http://localhost:8000/stocklist")
	    .then(function(response) {
	        $scope.stocks = response.data;
	        console.log($scope.stocks);
	    });
   	
   	
   }
   $scope.btnAdd = function(){
   	$scope.searchStockShow = false;
   	$scope.addStockShow = true;
   }
});















app.controller("assignmentCtrl", function ($scope, $http) {
	 
	
	 $http.get("http://localhost:8000/assignmentlist")
	    .then(function(response) {
	        $scope.assignment = response.data;
	        console.log($scope.assignment);
	    });
	 
	 $scope.AddNewAssignment =  function(){
		
		
		 var d = $scope.doa.getFullYear() + "-" + $scope.doa.getMonth() + "-" + $scope.doa.getDate();
		 $scope.newassignment.doa = d;
		 var e = $scope.doe.getFullYear() + "-" + $scope.doe.getMonth() + "-" + $scope.doe.getDate();
		 $scope.newassignment.doe = e;
		 
		 $http.post("http://localhost:8000/assignmentlist/", $scope.newassignment).
	        then(function (data, status, headers, config) { alert("success") },
	             function (data, status, headers, config) { alert("error") });
		 
	 }
	 $scope.DeleteAssignment =  function(assignment){
		    console.log(assignment);
		    $http.delete("http://localhost:8000/assignmentdetail/" + assignment.id + "/");
		    
		    
		    $http.get("http://localhost:8000/assignmentlist")
	 	    .then(function(response) {
	 	        $scope.assignment = response.data;
	 	        console.log($scope.assignment);
	 	    });
	    	
	  }
	 $scope.EditAssignment =  function(assignment){
		 	
		  
		    $scope.updateAssignmentShow = true;
		    $scope.updateassignment = angular.copy(assignment);
		 	 console.log($scope.updateassignment);
	  }
	 
	 $scope.UpdateAssignment = function(){
		 $http.put("http://localhost:8000/assignmentdetail/" + $scope.updateassignment.id + "/", $scope.updateassignment);
		 $scope.updateAssignmentShow = false;
		 $http.get("http://localhost:8000/assignmentlist")
	 	    .then(function(response) {
	 	        $scope.assignments = response.data;
	 	        console.log($scope.assignments);
	 	    });
		 
	 }
	
	$scope.searchAssignmentShow = true;
	$scope.addAssignmentrShow = false;
	$scope.updateAssignmentShow = false;
	
   $scope.btnSearch = function(){
   	$scope.searchAssignmentShow = true;
   	$scope.addAssignmentShow = false;
   	 $http.get("http://localhost:8000/userlist")
	    .then(function(response) {
	        $scope.assignments = response.data;
	        console.log($scope.assignments);
	    });
   	
   	
   }
   $scope.btnAdd = function(){
   	$scope.searchAssignmentShow = false;
   	$scope.addAssignmentShow = true;
   }
});





