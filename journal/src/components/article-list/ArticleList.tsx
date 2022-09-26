import { useContext, useEffect, useState } from "react";
import { ArticlesContext } from "../../context/articles/ArticlesContext";
import { Article } from "../../context/articles/types";
import { ArticleCard } from "./article-card/ArticleCard";
import './ArticleList.scss';
import noResults from '../../static/images/noResults.png';

export const ArticleList = (): JSX.Element => {
  const { articles } = useContext(ArticlesContext);
  const [myArticles, setMyArticles] = useState(articles);

  useEffect(() => {
    // Update state when searching articles
    setMyArticles(articles);
  }, [articles])

  return (
    <div className='article-list'>
      {!myArticles?.length ?
        <div className='no-results-found'>
          <img src={noResults} alt='No results found' />
          <h2>Sorry, no results found :(</h2>
        </div>
        : myArticles?.map((article: Article) => (
          <ArticleCard {...article} key={article.id}/>))
      }
    </div>
  )
};