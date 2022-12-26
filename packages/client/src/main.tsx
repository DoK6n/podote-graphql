import { ApolloProvider } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { client } from './lib/graphql/client';
import router from './routes/router';
import GlobalStyles from './styles/GlobalStyles';
import { CookiesProvider } from 'react-cookie';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CookiesProvider>
      <ApolloProvider client={client}>
        <GlobalStyles />
        <RouterProvider router={router} />
      </ApolloProvider>
    </CookiesProvider>
  </React.StrictMode>,
);
