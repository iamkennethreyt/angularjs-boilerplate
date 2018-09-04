app.controller("appController" , ["$scope", "$http", function (state, http){

	state.category = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology']
	state.initialVal = ``
	state.initialCategory = `general`
	state.handleSearch = function(){
		state.initialVal = state.searchval
		state.initialVal2 = state.initialVal ? `search result for ${state.initialVal}...` : ''
		fetching()
	}

	state.handleClick = function(e){
		state.initialCategory = e
		fetching()
	}

	const fetching = () => {
		http.get(`https://newsapi.org/v2/top-headlines?q=${state.initialVal}&category=${state.initialCategory}&country=ph&apiKey=1d736559caa642f3bcc6076797b42e52`)
		.then(response => response.data.articles)
		.then(response => state.list = response)
	}

	fetching()
}])