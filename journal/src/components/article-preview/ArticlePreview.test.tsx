import { render, screen } from '@testing-library/react';
import { renderComponentWithContext } from '../../spec/helpers';
import { mockArticle1 } from '../../spec/mockData';
import { ArticlePreview } from './ArticlePreview';

describe('Article previewer test cases', () => {
  it('should render an empty preview', () => {
    render(<ArticlePreview />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Select an article to start reading')
  });

  it('shoud render an article preview', () => {
    renderComponentWithContext(<ArticlePreview />);
    // Article title
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(mockArticle1.title);
    // View article button
    expect(screen.getByRole('button')).toHaveTextContent('View article');
  })
});