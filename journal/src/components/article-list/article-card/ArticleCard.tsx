
import { useMutation } from '@apollo/client';
import classNames from 'classnames';
import { useContext, useEffect, useState } from 'react';
import { UPDATE_READ_STATUS } from '../../../context/articles/articles-mutations';
import { ArticlesContext } from '../../../context/articles/ArticlesContext';
import { ArticleInfo } from '../../article-info/ArticleInfo';
import { ImageWithFallback } from '../../ImageWithFallback';
import './ArticleCard.scss';

export const ArticleCard = ({ read, ...article }: any): JSX.Element => {
  const { setSelectedArticle, setUnreadArticles } = useContext(ArticlesContext);
  const [updateReadStatus, { data, error }] = useMutation(UPDATE_READ_STATUS);
  const [readState, setReadState] = useState(read);

  useEffect(() => {
    if (data) {
      setUnreadArticles(data?.updateReadStatus);
    }
  }, [data?.updateReadStatus, data, setUnreadArticles])

  const selectArticle = () => {
    setSelectedArticle(article);
    updateReadStatus({ variables: { title: article.title } });
    setReadState(true);
  }
  const handleKeyDown = (event: any) =>
    event.key === 'Enter' && selectArticle();

  if (error) { window.open('http://0.0.0.0:8000/error'); }

  return <div className={classNames('article-card', !readState && 'new-notification')}
    onClick={selectArticle} tabIndex={0} onKeyDown={handleKeyDown}>
    <div className='description'>
      <div className='preview'>
        <ImageWithFallback src={article?.urlToImage} />
      </div>
      <ArticleInfo {...article} />
    </div>
    <div className={classNames('badge', readState && 'hide')}></div>
  </div>
};