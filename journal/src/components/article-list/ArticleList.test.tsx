
import { render, screen } from '@testing-library/react';
import { mockArticle2, mockArticle1 } from '../../spec/mockData';
import { ArticleList } from './ArticleList';
import { renderWithProvider } from '../../spec/helpers';

describe('Article list test cases', () => {
  it('should render fallback list message', () => {
    render(<ArticleList />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Sorry, no results found :(');
  });

 it('should render 2 articles', async () => {
    renderWithProvider(<ArticleList/>)
    // article 1 
    expect(await screen.findByText(mockArticle1.title)).toBeInTheDocument();
    // Article 2
    expect(await screen.findByText(mockArticle2.title)).toBeInTheDocument();
  });
});