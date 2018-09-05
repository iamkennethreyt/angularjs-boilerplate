app.controller("appController" , ["$scope", "$http", function (state, http){

	state.sources = []
	state.category = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology']
	state.initialCategory = ``
	state.numLimit = 10

	state.handleClickReadMore = () => state.numLimit + 5
	state.handleClick = (e) => state.initialCategory = e
	
	console.log(state.numLimit)
	
	state.loader = "fetching data..."

	http.get('/api/readapi')
		.then((res) => state.sources = res.data.sources)
		.then((res) => state.loader = "")
		.catch((err)=> console.log(err))
}])