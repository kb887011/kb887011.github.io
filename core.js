var scotchTodo = angular.module('scotchTodo', []);


function mainController($scope, $http) {
	
$scope.formData = {};




// when landing on the page, get all todos and show them
	
$http.get('/api/todos')
		.success(function(data) {
			
$scope.todos = data;
		
})

		
.error(function(data) {
			
console.log('Error: ' + data);
		
});


 	
// when submitting the add form, send the text to the node API
	
$scope.createTodo = function() {
		
$http.post('/api/todos', $scope.formData)
			.success(function(data) {
				
$('input').val('');
				
$scope.todos = data;
			
})
			.error(function(data) {
				
console.log('Error: ' + data);
			
});
	
};


	
$scope.confirmTodo = function() { 
var r = confirm("Are you sure to add: " + $scope.formData.text); 
	if (r==true) { x = "You pressed OK!";
	 } 
	else { x="You pressed cancel!"; } 

$http.post('/api/todos', $scope.formData).success(function(data) { 
$('input').val(' '); $scope.todos = data; }). error(function(data)
 { console.log('Error: ' + data); }); };

// delete a todo after checking it
	
$scope.deleteTodo = function(id) {
		
//$http.delete('/api/todos/' + id)
	//for deleting single --midterm
$http.delete('/api/todos/')	//for deleting all  --midterm
.success(function(data) {
				
$scope.todos = data;
			})
			
.error(function(data) {
				
console.log('Error: ' + data);
			
});
	


};

}