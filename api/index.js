'use strict';

const
  express = require('express'),
  cors = require('cors'),
  news = require('./data/news.json');

var express_graphql = require('express-graphql');
var { buildSchema } = require('graphql');
const path = require('path');
const { v1 } = require('uuid');

const app = express();
app.use(cors());

const formatDate = publishedAt => {
  const date = new Date(publishedAt);
  return `${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`;
}

const getNewsByTitle = query => {
  return news.articles.filter(item => {
    const patt = new RegExp(query, 'gi');
    return patt.test(item.title);
  });
}

const getTotalUnread = () =>
  news.articles.filter(article => !article.read).length;

// NOT USED
// app.get('/v1/news', (req, res) => {
//   if (!req.query.q)
//     return res.json(news);

//   const foundResults = getNewsByTitle(req.query.q);

//   return res.json({
//     articles: foundResults
//   });
// });

app.get('/error', function (req, res) {
  res.sendFile(path.join(__dirname, '/tpl/error.html'));
});

var schema = buildSchema(`
  type Query {
    articles(title: String): [Article]
    articlesUnreadCount: Int!
  },
  type Article {
    source: Source
    author: String
    title: String
    description: String
    url: String
    urlToImage: String
    publishedAt: String
    content: String
    read: Boolean
    formattedDate: String
    id: ID!
  },
  type Source {
    id: String
    name: String
  }
  type Mutation {
    updateReadStatus(title: String): Int
  }
`);

var root = {
  articles: query => {
    let articles = news.articles;
    // Add new attributes to original data
    // Could be improved if data coming from db
    articles = news.articles.map(({ publishedAt, read, formattedDate, id, ...rest }) => ({
      read: read ? read : false,
      formattedDate: formattedDate ? formattedDate : formatDate(publishedAt),
      id: id ? id : v1(),
      ...rest
    }));
    news.articles = articles;
    return query.title ? getNewsByTitle(query.title) : news.articles
  },
  articlesUnreadCount: () => getTotalUnread(),
  updateReadStatus: ({ title }) => {
    const artIndex = news.articles.findIndex(p => p.title === title);
    if (artIndex === -1) return null;
    news.articles[artIndex] = { ...news.articles[artIndex], read: true };
    return getTotalUnread();
  },
};

app.use('/graphql', express_graphql({
  schema: schema,
  rootValue: root,
  graphiql: true
}));

let server = app.listen(8000, '0.0.0.0', () => {
  console.log(`API listening on http://${server.address().address}:${server.address().port}`);
});