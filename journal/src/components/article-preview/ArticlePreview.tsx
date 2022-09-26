import { useContext, } from 'react';
import { ArticlesContext } from '../../context/articles/ArticlesContext';
import { ArticleInfo } from '../article-info/ArticleInfo';
import { ImageWithFallback } from '../ImageWithFallback';

import './ArticlePreview.scss';

export const ArticlePreview = (): JSX.Element => {
  let { article } = useContext(ArticlesContext);
  const readArticle = () => {
    window.open(String(article?.url), '_blank', 'noopener,noreferrer');
  };

  return (<div className='article'> {!article ?
    <h2> Select an article to start reading</h2> :
    <div className='article-container' onClick={readArticle}>
      <div className='preview'>
        <h2>{article?.title}</h2>
        <ArticleInfo {...article} />
        <div className='img'>
          <ImageWithFallback src={article?.urlToImage} />
        </div>
        <div className='description'>{article?.description}</div>
        <div>{article?.content}</div>
      </div>
      <div className='read-more'>
        <h3>Would you like to read more?</h3>
        <button onClick={readArticle}>View article</button>
      </div>
    </div>
  }
  </div>)
}
