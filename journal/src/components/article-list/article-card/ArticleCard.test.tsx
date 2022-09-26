
import { screen } from '@testing-library/react';
import { mockArticle1, mockArticle2, } from '../../../spec/mockData';
import { ArticleCard } from './ArticleCard';
import { renderWithProvider } from "../../../spec/helpers";

describe('Article card test cases', () => {
  it('should render a new article', async () => {
    const { container } = renderWithProvider(<ArticleCard {...mockArticle2} />)
    expect(await screen.findByText(mockArticle2.title)).toBeInTheDocument();
    expect(screen.getByAltText('Preview')).toBeDefined();
    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild).toHaveClass('new-notification');
  });

  it('should render read article', async () => {
    const { container } = renderWithProvider(<ArticleCard {...mockArticle1} />)
    expect(await screen.findByText(mockArticle1.title)).toBeInTheDocument();
    expect(screen.getByAltText('Preview')).toBeDefined();
    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild).not.toHaveClass('new-notification');
  });

});