import { GET_ARTICLES_LIST } from "../context/articles/articles-querys";
import { Article, ArticleContext } from "./../context/articles/types";

export const mockArticle1: Article = {
  author: "author",
  urlToImage: "imageUrl",
  title: "title 1",
  formattedDate: "14-05-2022",
  description: "Description",
  content: "content",
  url: "url",
  read: true,
  id: 2,
  source: {
    name: "The New York Times",
  },
};
export const mockArticle2: Article = {
  author: "author",
  urlToImage: "imageUrl",
  title: "title 2",
  formattedDate: "14-05-2022",
  description: "Description",
  content: "content",
  url: "url",
  read: false,
  id: 1,
  source: {
    name: "The New York Times",
  },
};

export const mockGetArticlesQuery = [
  {
    request: {
      query: GET_ARTICLES_LIST,
      variables: {
        name: "",
      },
    },
    result: {
      data: {
        articles: [mockArticle2, mockArticle1],
      },
    },
  },
];

export const mockArticleContext: ArticleContext = {
  articles: mockGetArticlesQuery[0].result.data.articles,
  article: mockArticle1,
  unRead: 32,
  setSelectedArticle: jest.fn(),
  setUnreadArticles: jest.fn(),
  setArticles: jest.fn(),
};
