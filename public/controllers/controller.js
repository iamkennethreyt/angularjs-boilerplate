app.controller("appController" , ["$scope", "$http", function (state, http){

	state.articles = []
	state.category = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology']
	state.initialCategory = ``
	state.numLimit = 5

	state.handleClickReadMore = () => {
		state.numLimit = state.numLimit + 5
	}
	state.handleClick = (e) => state.initialCategory = e
	
	state.loader = "fetching data..."

	http.get('/api/readapi')
		.then((res) => state.articles = res.data.articles)
		.then(() => state.loader = "")
}])