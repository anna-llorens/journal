import { Button } from '../button/Button';
import { useLazyQuery } from '@apollo/client';
import { useContext, useEffect, useState } from 'react';
import { GET_ARTICLES_LIST } from '../../context/articles/articles-querys';
import { ArticlesContext } from '../../context/articles/ArticlesContext';
import './Search.scss';

export const Search = () => {
  const [value, setValue] = useState('');
  const { articles, setArticles } = useContext(ArticlesContext);

  // Get articles query
  const [executeSearch, { data }] = useLazyQuery(
    GET_ARTICLES_LIST, { fetchPolicy: 'network-only' },
  );

  useEffect(() => {
    // Update articles from context
    if (data) {
      setArticles(data?.articles);
    }
  }, [data, data?.articles, setArticles, articles]);

  const searchArticles = () => {
    setArticles([]);
    executeSearch({
      variables: { title: value }
    })
  }

  const handleKeyDown = (event: any) =>
    event.key === 'Enter' && searchArticles();

  return <div className='search'>
    <input type='text'
      placeholder='Article title'
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={handleKeyDown}
      value={value} />
    <Button onClick={searchArticles}>Search</Button>
  </div>
}
