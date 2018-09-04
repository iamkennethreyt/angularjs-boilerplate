app.controller("appController" , ["$scope", "$http", function (state, http){
	http.get('https://jsonplaceholder.typicode.com/todos')
	.then(response => response.data)
	.then(json => state.list = json)
}])





