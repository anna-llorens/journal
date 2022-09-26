import { Dispatch, SetStateAction } from "react";

export type Article = {
  author: string;
  urlToImage: string;
  title: string;
  formattedDate: string;
  description: String;
  content: String;
  url: String;
  read: boolean;
  id: number;
  source: {
    name: string;
  };
};

export type ArticleContext = {
  articles: Article[];
  article: Article | null;
  setSelectedArticle: Dispatch<SetStateAction<any>>;
  setUnreadArticles: Dispatch<SetStateAction<any>>;
  setArticles: Dispatch<SetStateAction<any>>;
  unRead: number;
};
