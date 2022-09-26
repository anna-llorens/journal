import './ArticleInfo.scss';

export const ArticleInfo = ({ ...article }) =>
  <div className='article-info'>
    <h5 className='title'>{article?.title}</h5>
    <div className='author'>{article?.author}</div>
    <div className='date'>{article?.formattedDate}  -  {article?.source?.name}</div>
  </div>
