import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import  App  from './App';
import { ApolloProvider } from '@apollo/client';
import { client } from './apollo-client-conf';
import { ArticlesProvider } from './context/articles/ArticlesContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ArticlesProvider>
        <App />
      </ArticlesProvider>
    </ApolloProvider>
  </React.StrictMode>
);