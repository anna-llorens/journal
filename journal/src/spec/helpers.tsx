import { MockedProvider } from '@apollo/client/testing';
import { render } from '@testing-library/react';
import { ArticlesContext } from '../context/articles/ArticlesContext';
import { mockArticleContext, mockGetArticlesQuery } from './mockData';

const context = (component: JSX.Element) => 
<ArticlesContext.Provider value={mockArticleContext}>
  {component}
</ArticlesContext.Provider>;

export const renderComponentWithContext = (component: JSX.Element) =>
  render(context(component));


export const renderWithProvider = (component: any) => {
  const {container} = render(
    <MockedProvider mocks={mockGetArticlesQuery} addTypename={false}>
      <ArticlesContext.Provider value={mockArticleContext}>
        {component}
      </ArticlesContext.Provider>
    </MockedProvider>
  );
  return {container};
}
