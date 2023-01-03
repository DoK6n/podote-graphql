import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
  from,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { User } from 'firebase/auth';
import userStorage from '../userStorage';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.error(
        `[GraphQL error]: 
        Message: ${message}
        Location: ${JSON.stringify(locations)}
        Path: ${path}`,
      );
    });
  }
  if (networkError) {
    console.error(`[Network error]: ${networkError}`);
  }
});

interface ReturnUser extends User {
  stsTokenManager: {
    accessToken: string;
    expirationTime: number;
    isExpired: boolean;
  };
}

const httpLink = new HttpLink({
  uri: `${import.meta.env.VITE_SERVER_URL}/graphql`,
});

const authMiddleware = new ApolloLink((operation, forward) => {
  const user = userStorage.get() as ReturnUser;
  const token = user.stsTokenManager.accessToken;
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }));
  return forward(operation);
});

const appLink = from([authMiddleware, errorLink, httpLink]);

export const client = new ApolloClient({
  link: appLink,
  credentials: 'include',
  cache: new InMemoryCache({
    typePolicies: {
      Todo: {
        keyFields: ['id', 'userId'],
      },
    },
  }),
  connectToDevTools: true,
});
