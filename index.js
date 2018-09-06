const express = require('express');
const fetch = require('node-fetch')
const app = express();
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('1d736559caa642f3bcc6076797b42e52');

app.use(express.static(__dirname + '/public'));         

app.get('/api/readapi', (req, res) => {
    newsapi.v2.topHeadlines(
        {
            language: 'en',
            country: 'us'
        }
    )
    .then(json => res.send(json))
});

app.get('*', (req,res) => res.sendfile("./public/index.html"));

app.listen(8080, () => console.log(`App listening on port 8080`));

// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
