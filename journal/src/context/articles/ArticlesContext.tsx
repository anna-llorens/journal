import { useQuery } from "@apollo/client";
import { createContext, useEffect, useState } from "react";
import { GET_ARTICLES_LIST } from "./articles-querys";
import { ArticleContext } from "./types";

export const ArticlesContext = createContext<ArticleContext>({
  articles: [],
  article: null,
  setSelectedArticle: () => { },
  setUnreadArticles: () => { },
  setArticles: () => { },
  unRead: -1
});

export const ArticlesProvider = ({ children }: any) => {
  const [articles, setArticles] = useState([]);
  const [article, setSelectedArticle] = useState(null);
  const [unRead, setUnreadArticles] = useState(-1);
  const { loading, data } = useQuery(GET_ARTICLES_LIST);

  useEffect(() => {
    setArticles(data?.articles)
    setUnreadArticles(data?.articlesUnreadCount)
  }, [data?.articles, data?.articlesUnreadCount])

  if (loading) return <h1>Loading ...</h1>;

  return (
    <ArticlesContext.Provider value={{
      articles,
      article,
      setSelectedArticle,
      unRead,
      setUnreadArticles,
      setArticles
    }}>
      {children}
    </ArticlesContext.Provider>
  )
}