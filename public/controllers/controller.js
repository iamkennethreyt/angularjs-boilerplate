app.controller("appController" , ["$scope", "$http", function (state, http){
	http.get('https://newsapi.org/v2/top-headlines?country=ph&apiKey=1d736559caa642f3bcc6076797b42e52')
		.then(response => response.data)
		.then(json => state.list = json.articles)
}])